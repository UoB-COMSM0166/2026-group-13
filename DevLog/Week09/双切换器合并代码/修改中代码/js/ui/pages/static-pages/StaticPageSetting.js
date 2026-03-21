import { PageBase } from "../PageBase.js";
import { ButtonBase } from "../../components/ButtonBase.js";
import { Assets } from "../../../AssetsManager.js";
import { WindowSetting } from "../../windows/WindowSetting.js";

export class StaticPageSetting extends PageBase {
  constructor(switcher, p) {
    super(switcher);
    this.p = p;
    this.settingSidebar = null;
  }

  enter() {
    const p = this.p;

    // 返回按钮
    const backBtn = new ButtonBase(p, '◀', 0.02 * p.width, 0.03 * p.height, () => {
      this.switcher.showMainMenu(p);
    }, 'back-button');
    backBtn.btn.style('width', 0.040 * p.width + 'px');
    backBtn.btn.style('height', 0.065 * p.height + 'px');
    this.addElement(backBtn);

    // 设置悬浮窗（进入页面后自动打开）
    const sidebarWidth = Math.round(p.width * 0.8);
    const sidebarHeight = Math.round(p.height * 0.8);
    const sidebarX = Math.round((p.width - sidebarWidth) / 2);
    const sidebarY = Math.round((p.height - sidebarHeight) / 2);

    this.settingSidebar = new WindowSetting(p, sidebarX, sidebarY, {
      width: sidebarWidth,
      height: sidebarHeight,
      layout: 'tabbed',
      draggable: false,
      closable: false,
      extraClasses: ['setting-sidebar'],
    });
    this.settingSidebar.open();
  }

  exit() {
    if (this.settingSidebar) {
      this.settingSidebar.remove();
      this.settingSidebar = null;
    }
    super.exit();
  }

  draw() {
    const p = this.p;
    if (Assets.bgImageSettings) {
      p.image(Assets.bgImageSettings, 0, 0, p.width, p.height);
    } else {
      p.background(200, 255, 200);
    }
  }
}
