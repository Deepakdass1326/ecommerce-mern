import { Fragment } from "react";
import { SquareUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  ListOrdered,
  LayoutDashboard,
  ShoppingBag,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBag />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <ListOrdered />,
  },
];

function MenuItems({setOpne}) {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path)
             setOpne ? setOpne(false) : null
          }}
          className="flex cursor-pointer text-l items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

function AdminSidebar({ open, setOpne }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpne}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <SquareUserRound size={28} />
                <span>Admin Panel</span>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpne={setOpne}/>
          </div>
        </SheetContent>
      </Sheet>

      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div onClick={() => navigate('/admin/dashboard')} className="flex cursor-pointer items-center gap-2">
          <SquareUserRound size={30} />
          <h1 className="text-lg font-bold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}

export default AdminSidebar;
