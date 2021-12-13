import { useState } from 'react';
import Sidebar from '../views/Sidebar.js'

export default function MinhaConta () {

    const [SidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
      setSidebarOpen(false);  
    }
    return (
        <div className="account">
            <Sidebar sidebarOpen={SidebarOpen} closeSidebar={closeSidebar}/>
        </div>
    )

}
