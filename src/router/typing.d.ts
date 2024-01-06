import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    title: string // 路由菜单title
    icon?: string // 路由菜单icon
    hidden?: boolean // 菜单栏不显示
  }
}
