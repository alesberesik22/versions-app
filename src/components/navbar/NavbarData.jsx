import React from 'react'
import {AiOutlineHome, AiOutlineAppstore} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi';

export const NavbarData = [
    {
        title:"Home",
        icon: <AiOutlineHome />,
        link: "/home"
    },
    {
        title:"SAM_SAM_APP_VERSION",
        icon: <AiOutlineAppstore />,
        link: "/sam_sam_app_version"
    },
    {
        title:"SAM_SAM_PRF_VERSION",
        icon: <AiOutlineAppstore />,
        link: "/sam_sam_prf_version"
     },
     {
        title:"Settings",
        icon: <FiSettings />,
        link: "/settings"
     },
]
