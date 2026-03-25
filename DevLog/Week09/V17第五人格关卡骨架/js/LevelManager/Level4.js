import { Player, Ground, Wall, Portal, Button, Enemy } from "../GameEntityModel/index.js";
import { CollisionSystem } from "../CollideSystem/CollisionSystem.js";
import { PhysicsSystem } from "../PhysicsSystem/PhysicsSystem.js";
import { RecordSystem } from "../RecordSystem/RecordSystem.js";
import { BaseLevel } from "./BaseLevel.js";
import { RecordPlayState } from "../RecordSystem/RecordPlayState.js";

export class Level4 extends BaseLevel {
    constructor(p, eventBus) {
        super(p, eventBus);
        this.bgAssetKey = "bgImageLevel2"; // 先复用现有背景，之后再换
        const wallThickness = 20;

        // 左右墙
        this.entities.add(new Wall(0, 0, wallThickness, p.height));
        this.entities.add(new Wall(p.width - wallThickness, 0, wallThickness, p.height));

        // 地面
        this.entities.add(new Ground(0, 0, p.width, 80));

        // 阶梯平台
        // 平台 1（按钮1）
        this.entities.add(new Ground(150, 130, 120, 30, true));

        
        // 辅助平台 A
        this.entities.add(new Ground(300, 170, 100, 25, true));

        // 平台 2（按钮2）
        this.entities.add(new Ground(430, 240, 130, 30, true));

        // 平台 3（按钮3）
        this.entities.add(new Ground(670, 320, 140, 30, true));

        // 辅助平台 B
        this.entities.add(new Ground(860, 450, 100, 25, true));

        // 平台 4（按钮4）
        this.entities.add(new Ground(1000, 480, 150, 30, true));

        // 门前平台
        this.entities.add(new Ground(1160, 560, 100, 25, true));

        this.entities.add(new Ground(880, 210, 100, 24, true));
        this.entities.add(new Ground(1080, 260, 90, 24, true));
        this.entities.add(new Ground(280, 170, 90, 24, true));
        this.entities.add(new Ground(200, 500, 100, 24, true));
        this.entities.add(new Ground(430,380,130,25,true));
        // 四个按钮（代表四个密码终端）
        this.button1 = new Button(200, 160, 20, 5);
        this.button2 = new Button(485, 270, 20, 5);
        this.button3 = new Button(730, 350, 20, 5);
        this.button4 = new Button(1065, 510, 20, 5);

        this.entities.add(this.button1);
        this.entities.add(this.button2);
        this.entities.add(this.button3);
        this.entities.add(this.button4);

        // 终点门
        this.portal = new Portal(1190, 590, 50, 50);
        this.entities.add(this.portal);

        // 记录四个按钮是否已破解完成
        this.buttonSolved = {
            b1: false,
            b2: false,
            b3: false,
            b4: false,
        };

        // 玩家
        const player = new Player(50, 80, 40, 40);
        player.createListeners();
        this.entities.add(player);

        // 怪物
       this.enemySpawnPoints = [
            { x: 80, y: 80 },
            { x: 220, y: 160 },
            { x: 470, y: 270 },
            { x: 720, y: 350 },
            { x: 1020, y: 510 },
        ];

        // 录制系统
        this.recordSystem = new RecordSystem(
            player,
            5000,
            (x, y) => this.addReplayer(x, y),
            () => this.removeReplayer()
        );
        this.recordSystem.createListeners();

        // 物理和碰撞系统
        this.physicsSystem = new PhysicsSystem(this.entities);
        this.collisionSystem = new CollisionSystem(this.entities, eventBus);

        this.enemy = null;
        this.spawnEnemyRandom();
    }

    spawnEnemyRandom() {
        const point = this.enemySpawnPoints[
            Math.floor(Math.random() * this.enemySpawnPoints.length)
        ];

        this.enemy = new Enemy(point.x, point.y, 36, 36, 1.4);
        this.entities.add(this.enemy);
        this.syncSystemsEntities();
    }

    updateCollision(p = this.p, eventBus = this.eventBus) {
        this.collisionSystem.collisionEntry(eventBus);

        this.updateEnemyTarget();
        // 检查怪物碰到分身：怪和分身一起消失
        this.checkEnemyHitsReplayer();

        // 检查怪物碰到玩家：失败
        this.checkEnemyHitsPlayer(eventBus);

        // 只要踩到一次，就记为已破解
        if (this.button1.isPressed) {
            this.buttonSolved.b1 = true;
            this.button1.solved = true;
        }
        if (this.button2.isPressed) {
            this.buttonSolved.b2 = true;
            this.button2.solved = true;
        }
        if (this.button3.isPressed) {
            this.buttonSolved.b3 = true;
            this.button3.solved = true;
        }
        if (this.button4.isPressed) {
            this.buttonSolved.b4 = true;
            this.button4.solved = true;
        }

        // 四个全部完成后开门
        if (
            this.buttonSolved.b1 &&
            this.buttonSolved.b2 &&
            this.buttonSolved.b3 &&
            this.buttonSolved.b4
        ) {
            this.portal.openPortal();
        }

    }

    getGroundEntities() {
    const grounds = [];
    for (const entity of this.entities) {
        if (entity.type === "ground" && entity.collider) {
            grounds.push(entity);
        }
    }
    return grounds;
}

isEnemyGrounded(enemy) {
    if (!enemy || !enemy.collider) return false;

    const enemyLeft = enemy.x + 4;
    const enemyRight = enemy.x + enemy.collider.w - 4;
    const enemyBottom = enemy.y;

    for (const ground of this.getGroundEntities()) {
        const groundLeft = ground.x;
        const groundRight = ground.x + ground.collider.w;
        const groundTop = ground.y + ground.collider.h;

        const overlapX = enemyRight > groundLeft && enemyLeft < groundRight;
        const closeToTop = Math.abs(enemyBottom - groundTop) <= 2;

        if (overlapX && closeToTop) {
            return true;
        }
    }
    return false;
}

isGroundAhead(enemy, dir) {
    if (!enemy || !enemy.collider) return false;

    const probeX = dir > 0
        ? enemy.x + enemy.collider.w + 20
        : enemy.x - 20;

    const enemyBottom = enemy.y;

    for (const ground of this.getGroundEntities()) {
        const groundLeft = ground.x;
        const groundRight = ground.x + ground.collider.w;
        const groundTop = ground.y + ground.collider.h;

        const insideX = probeX >= groundLeft && probeX <= groundRight;
        const heightClose = Math.abs(enemyBottom - groundTop) <= 12;

        if (insideX && heightClose) {
            return true;
        }
    }
    return false;
}

    isHigherPlatformAhead(enemy, dir) {
        if (!enemy || !enemy.collider) return false;

        const probeLeft = dir > 0
            ? enemy.x + enemy.collider.w + 4
            : enemy.x - 40;

        const probeRight = dir > 0
            ? enemy.x + enemy.collider.w + 40
            : enemy.x - 4;

        const enemyBottom = enemy.y;

        for (const ground of this.getGroundEntities()) {
            const groundLeft = ground.x;
            const groundRight = ground.x + ground.collider.w;
            const groundTop = ground.y + ground.collider.h;

            const overlapAhead = probeRight >= groundLeft && probeLeft <= groundRight;
            const higherThanCurrent = groundTop > enemyBottom + 8;
            const notTooHigh = groundTop < enemyBottom + 110;

            if (overlapAhead && higherThanCurrent && notTooHigh) {
                return true;
            }
        }
        return false;
    }

    updateEnemyAI() {
        if (!this.enemy) return;

        this.enemy.tickAIState();
        this.updateEnemyTarget();

        const target = this.enemy.target;
        if (!target) {
            this.enemy.movementComponent.velX = 0;
            return;
        }

        const dx = target.x - this.enemy.x;
        const dy = target.y - this.enemy.y;

        const grounded = this.isEnemyGrounded(this.enemy);
        const targetHigher = dy > 20;
        const targetLower = dy < -20;

        let dir = dx >= 0 ? 1 : -1;

        // 只要目标在更高处，而且怪物站在平台上，
        // 就优先去找“当前平台更合适的边缘”
        if (grounded && targetHigher) {
            dir = this.getClimbDirection(this.enemy, target);
        }

        const groundAhead = this.isGroundAhead(this.enemy, dir);
        const higherPlatformAhead = this.isHigherPlatformAhead(this.enemy, dir);

        // 很接近目标且目标不更高时，才停
        if (Math.abs(dx) < 4 && !targetHigher) {
            this.enemy.movementComponent.velX = 0;
        } else {
            this.enemy.movementComponent.velX = dir * this.enemy.speed;
        }

        // 情况1：前面已经没地了，说明走到边缘了，直接跳
        if (grounded && !groundAhead) {
            this.enemy.jump(9);
            return;
        }

        // 情况2：前方有更高平台，而且目标在更高处，跳上去
        if (grounded && higherPlatformAhead && targetHigher) {
            this.enemy.jump(9);
            return;
        }

        // 玩家在更低处时，不主动往上乱跳
        if (targetLower) {
            return;
        }
    }



    updatePhysics() {
        // 先跑怪物 AI，再做物理
        this.updateEnemyAI();

        // 其他实体保留原本 update
        for (const entity of this.entities) {
            if (entity !== this.enemy && entity.update && typeof entity.update === "function") {
                entity.update(this.p);
            }
        }

        if (this.physicsSystem && typeof this.physicsSystem.physicsEntry === "function") {
            this.physicsSystem.physicsEntry();
        }
    }

    updateEnemyTarget() {
        if (!this.enemy || !this.recordSystem) return;

        // 录制阶段：怪物暂停
        if (this.recordSystem.state === RecordPlayState.Recording) {
            this.enemy.setTarget(null);
            this.enemy.movementComponent.velX = 0;
            this.enemy.movementComponent.velY = 0;
            return;
        }

        const player = this.referenceOfPlayer();
        const replayer = this.referenceOfReplayer();

        // 有正在回放的分身时，优先追分身；否则追玩家
        if (replayer && replayer.isReplaying) {
            this.enemy.setTarget(replayer);
        } else {
            this.enemy.setTarget(player);
        }
    }

    getSupportingGround(enemy) {
        if (!enemy || !enemy.collider) return null;

        const enemyLeft = enemy.x + 4;
        const enemyRight = enemy.x + enemy.collider.w - 4;
        const enemyBottom = enemy.y;

        for (const ground of this.getGroundEntities()) {
            const groundLeft = ground.x;
            const groundRight = ground.x + ground.collider.w;
            const groundTop = ground.y + ground.collider.h;

            const overlapX = enemyRight > groundLeft && enemyLeft < groundRight;
            const closeToTop = Math.abs(enemyBottom - groundTop) <= 2;

            if (overlapX && closeToTop) {
                return ground;
            }
        }
        return null;
    }

    getClimbDirection(enemy, target) {
        const ground = this.getSupportingGround(enemy);
        if (!ground || !enemy || !target) return target.x >= enemy.x ? 1 : -1;

        const groundLeft = ground.x;
        const groundRight = ground.x + ground.collider.w;
        const enemyCenter = enemy.x + enemy.collider.w / 2;

        // 两个边缘到目标 x 的距离
        const distToLeftEdge = Math.abs(target.x - groundLeft);
        const distToRightEdge = Math.abs(target.x - groundRight);

        // 选更接近目标的那一侧边缘
        const targetEdgeX = distToLeftEdge < distToRightEdge ? groundLeft : groundRight;

        return targetEdgeX >= enemyCenter ? 1 : -1;
    }

    checkEnemyHitsReplayer() {
        const replayer = this.referenceOfReplayer();
        if (!this.enemy || !replayer) return;

        // 只有“正在回放的实体分身”才会吸引并消灭怪物
        if (!replayer.isReplaying) return;

        if (this.isOverlap(this.enemy, replayer)) {
            this.entities.delete(this.enemy);
            this.enemy = null;

            this.removeReplayer();
            this.syncSystemsEntities();
        }
    }
        



    draw(p = this.p) {
        // 先画地面/平台
        for (const entity of this.entities) {
            if (entity.type === "ground") {
                entity.draw(p);
            }
        }

        // 再画其他实体
        for (const entity of this.entities) {
            if (entity.type !== "ground") {
                entity.draw(p);
            }
        }

        // 绘制录制 UI
        this.recordSystem.draw && this.recordSystem.draw(p);

        // 每帧释放按钮瞬时状态
        this.button1.releaseButton();
        this.button2.releaseButton();
        this.button3.releaseButton();
        this.button4.releaseButton();

        // 可选：调试时显示按钮完成状态
        this.drawSolvedHint(p);
    }

    drawSolvedHint(p = this.p) {
        p.push();
        p.scale(1, -1);
        p.fill(255);
        p.textSize(16);

        p.text(`B1: ${this.buttonSolved.b1 ? "OK" : "..."}`, 80, -40);
        p.text(`B2: ${this.buttonSolved.b2 ? "OK" : "..."}`, 180, -40);
        p.text(`B3: ${this.buttonSolved.b3 ? "OK" : "..."}`, 280, -40);
        p.text(`B4: ${this.buttonSolved.b4 ? "OK" : "..."}`, 380, -40);
        p.pop();
    }


    isOverlap(a, b) {
        if (!a || !b || !a.collider || !b.collider) return false;

        return (
            a.x < b.x + b.collider.w &&
            a.x + a.collider.w > b.x &&
            a.y < b.y + b.collider.h &&
            a.y + a.collider.h > b.y
        );
    }

    checkEnemyHitsPlayer(eventBus = this.eventBus) {
        const player = this.referenceOfPlayer();
        if (!player || !this.enemy) return;

        if (this.isOverlap(this.enemy, player)) {
            player.triggerDeath("enemy");
            eventBus.publish("autoResult", "lose");
        }
    }
}