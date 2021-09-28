__NUXT_JSONP__("/articles/graphics-switch-pop", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:[{article:{slug:"graphics-switch-pop",description:"How to use systems with switchable graphics\n",title:"Graphics Switching (Pop!_OS)",keywords:["System76","Pop",18.04,19.1,20.04,v,w,x],facebookImage:"\u002F_nuxt\u002Fimages\u002Fgraphics-switch-pop-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Fgraphics-switch-pop-twitterImage.jpg",hidden:false,section:"software",toc:[{id:A,depth:y,text:B},{id:C,depth:s,text:x},{id:D,depth:s,text:v},{id:E,depth:s,text:w},{id:F,depth:s,text:G},{id:H,depth:y,text:I},{id:J,depth:s,text:K},{id:L,depth:s,text:M},{id:N,depth:y,text:O}],body:{type:"root",children:[{type:a,tag:e,props:{},children:[{type:b,value:"Many laptops these days have "},{type:a,tag:"em",props:{},children:[{type:b,value:"switchable graphics"}]},{type:b,value:", which allow users to switch between several GPU modes spanning power use and performance.\nThe following System76 laptops have these switchable graphics capabilities:"}]},{type:b,value:c},{type:a,tag:P,props:{},children:[{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:"Adder WS (addw1, addw2)"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:"Galago Pro (galp5 - NVIDIA models only)"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:"Gazelle (gaze14, gaze15)"}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:b,value:"Oryx Pro (oryp4, oryp4-b, oryp5, oryp6, oryp7)"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Pop!_OS includes utilities for switching between these modes, which you can learn more about below."}]},{type:b,value:c},{type:a,tag:z,props:{id:A},children:[{type:a,tag:g,props:{href:"#graphics-modes",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:B}]},{type:b,value:c},{type:a,tag:u,props:{id:C},children:[{type:a,tag:g,props:{href:"#integrated",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Integrated graphics mode uses the integrated GPU only and turns off the NVIDIA\nGPU. This mode uses less power, leading to a longer battery life and less fan\nnoise."}]},{type:b,value:c},{type:a,tag:u,props:{id:D},children:[{type:a,tag:g,props:{href:"#nvidia",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:v}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"NVIDIA graphics mode uses the discrete NVIDIA GPU only. This provides a better\ngraphical experience, but reduces battery life. Most external display ports on\nSystem76 laptops are connected to the NVIDIA GPU only. (Some models, such as the\nGazelle, may also have external ports connected to the integrated GPU.)"}]},{type:b,value:c},{type:a,tag:u,props:{id:E},children:[{type:a,tag:g,props:{href:"#hybrid",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:w}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Hybrid graphics mode uses both the integrated GPU and the discrete NVIDIA GPU.\nApplications will use the integrated GPU unless explicitly requested to use the\ndiscrete GPU."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Vulkan applications must be launched with this command to be rendered on the dGPU (NVIDIA):"}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o],style:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:r},children:[{type:b,value:"__NV_PRIME_RENDER_OFFLOAD=1 \u003Capplication\u003E\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"GLX applications must be launched with this command to be rendered on the dGPU (NVIDIA):"}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o],style:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:r},children:[{type:b,value:"__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia \u003Capplication\u003E\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Hybrid graphics mode is available on 19.10 and later."}]},{type:b,value:c},{type:a,tag:u,props:{id:F},children:[{type:a,tag:g,props:{href:"#compute",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:G}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Compute graphics mode uses the integrated GPU for all rendering. The NVIDIA\nGPU is left available, allowing it to be used as a compute node."}]},{type:b,value:c},{type:a,tag:z,props:{id:H},children:[{type:a,tag:g,props:{href:"#switch-graphics",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:I}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Pop!_OS by System76 includes the system76-power package, which includes the\nability to switch between integrated, NVIDIA, and hybrid graphics modes."}]},{type:b,value:c},{type:a,tag:u,props:{id:J},children:[{type:a,tag:g,props:{href:"#from-gnome-desktop",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:K}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Click the system menu in the top right corner of your screen to access graphics\nswitching."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:"nuxt-picture",props:{alt:"Graphics",src:"\u002Fimages\u002Fgraphics-switch-pop\u002Fsystem-menu.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Click on NVIDIA, Integrated, Hybrid, or Compute depending on your use case."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Once you select a mode, you will be prompted to reboot."}]},{type:b,value:c},{type:a,tag:u,props:{id:L},children:[{type:a,tag:g,props:{href:"#from-the-command-line",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:M}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If you are not using the GNOME Desktop Environment, you can use the system76-power\ncommand line tool. You can see the options with this command:"}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o],style:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:r},children:[{type:b,value:"system76-power "}]},{type:a,tag:d,props:{style:"color: var(--code-0C)"},children:[{type:b,value:"help"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For seeing which graphics mode the system is using:"}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o],style:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:r},children:[{type:b,value:"sudo system76-power graphics"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For switching to NVIDIA graphics:"}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o],style:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:r},children:[{type:b,value:"sudo system76-power graphics nvidia"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For switching to integrated graphics:"}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o],style:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:r},children:[{type:b,value:"sudo system76-power graphics integrated"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For switching to hybrid graphics:"}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o],style:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:r},children:[{type:b,value:"sudo system76-power graphics hybrid"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For switching to compute mode:"}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o],style:p},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:r},children:[{type:b,value:"sudo system76-power graphics compute"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:z,props:{id:N},children:[{type:a,tag:g,props:{href:"#sources",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:O}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The source code for the system76-power utility and the GNOME Shell extension can be found on GitHub:"}]},{type:b,value:c},{type:a,tag:P,props:{},children:[{type:b,value:c},{type:a,tag:t,props:{},children:[{type:a,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fsystem76-power",rel:[Q,R,S],target:T},children:[{type:b,value:"system76-power"}]}]},{type:b,value:c},{type:a,tag:t,props:{},children:[{type:a,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fgnome-shell-extension-system76-power",rel:[Q,R,S],target:T},children:[{type:b,value:"gnome-shell-extension-system76-power"}]}]},{type:b,value:c}]}]},dir:"\u002F",path:"\u002Fgraphics-switch-pop",extension:".md",createdAt:U,updatedAt:U,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fe54bdadaf285cdda4147b9f7bfc8a53111584b5a",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{"/_ipx/images/graphics-switch-pop/system-menu.png?w=320&f=png":"\u002F_nuxt\u002Fimage\u002F785fb0.png","/_ipx/images/graphics-switch-pop/system-menu.png?w=640&f=png":"\u002F_nuxt\u002Fimage\u002Fe826cd.png","/_ipx/images/graphics-switch-pop/system-menu.png?w=768&f=png":"\u002F_nuxt\u002Fimage\u002F63c62d.png","/_ipx/images/graphics-switch-pop/system-menu.png?w=1024&f=png":"\u002F_nuxt\u002Fimage\u002F0cbc8b.png","/_ipx/images/graphics-switch-pop/system-menu.png?w=1280&f=png":"\u002F_nuxt\u002Fimage\u002Fcc4f1e.png","/_ipx/images/graphics-switch-pop/system-menu.png?w=1536&f=png":"\u002F_nuxt\u002Fimage\u002F41921b.png","/_ipx/images/graphics-switch-pop/system-menu.png?w=320&f=webp":"\u002F_nuxt\u002Fimage\u002Fa8beae.webp","/_ipx/images/graphics-switch-pop/system-menu.png?w=640&f=webp":"\u002F_nuxt\u002Fimage\u002F1b05c9.webp","/_ipx/images/graphics-switch-pop/system-menu.png?w=768&f=webp":"\u002F_nuxt\u002Fimage\u002Fd487e4.webp","/_ipx/images/graphics-switch-pop/system-menu.png?w=1024&f=webp":"\u002F_nuxt\u002Fimage\u002F84c3c3.webp","/_ipx/images/graphics-switch-pop/system-menu.png?w=1280&f=webp":"\u002F_nuxt\u002Fimage\u002Fa60795.webp","/_ipx/images/graphics-switch-pop/system-menu.png?w=1536&f=webp":"\u002F_nuxt\u002Fimage\u002F9ca69b.webp"}}],fetch:{},mutations:void 0}}("element","text","\n","span","p","line","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","shiki","background-color: var(--code-00)","code","color: var(--code-0F)",3,"li","h3","NVIDIA","Hybrid","Integrated",2,"h2","graphics-modes","Graphics modes","integrated","nvidia","hybrid","compute","Compute","switch-graphics","Switch graphics","from-gnome-desktop","From GNOME Desktop","from-the-command-line","From the command line","sources","Sources","ul","nofollow","noopener","noreferrer","_blank","2021-09-28T18:11:38.727Z")));