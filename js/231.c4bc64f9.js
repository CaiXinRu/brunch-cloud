"use strict";(self["webpackChunkbrunch_cloud"]=self["webpackChunkbrunch_cloud"]||[]).push([[231],{5231:function(t,o,a){a.r(o),a.d(o,{default:function(){return E}});var e=a(6252),s=a(3577);const l=t=>((0,e.dD)("data-v-15276d60"),t=t(),(0,e.Cn)(),t),n={class:"bg-color--white"},r={class:"container u-pt-48 u-pb-68"},d={class:"location-area"},i={class:"dropdown"},c=l((()=>(0,e._)("span",null,"▼",-1))),h={style:{width:"100%"},class:"location-table"},u=l((()=>(0,e._)("thead",null,[(0,e._)("tr",{class:"location-head"},[(0,e._)("th",{class:"th-20 th-25"},"門市名稱"),(0,e._)("th",{class:"th-20 th-25"},"訂餐專線"),(0,e._)("th",{class:"th-60 th-50"},"門市位置")])],-1))),p={class:"th-20 th-25"},w={class:"th-20 th-25"},_={class:"th-60 th-50"},b={style:{width:"100%"},class:"location-table2"},f=l((()=>(0,e._)("thead",null,[(0,e._)("tr",{class:"location-head"},[(0,e._)("th",null,"門市名稱")])],-1))),v={style:{width:"100%",display:"flex","flex-direction":"column"}},m={style:{color:"var(--color--dark-brown)",margin:"2px 0"}},g={style:{margin:"2px 0"}},k={style:{margin:"2px 0"}};function y(t,o,a,l,y,D){const L=(0,e.up)("LocationBar"),C=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("div",r,[(0,e.Wm)(L,{id:"locationTop"}),(0,e._)("div",d,[(0,e._)("button",{type:"button","data-area":"north",class:"location-btn",onClick:o[0]||(o[0]=t=>D.filterLocations("north"))}," 北部地區 "),(0,e._)("button",{type:"button","data-area":"middle",class:"location-btn",onClick:o[1]||(o[1]=t=>D.filterLocations("middle"))}," 中部地區 "),(0,e._)("button",{type:"button","data-area":"south",class:"location-btn",onClick:o[2]||(o[2]=t=>D.filterLocations("south"))}," 南部地區 "),(0,e._)("button",{type:"button","data-area":"east",class:"location-btn",onClick:o[3]||(o[3]=t=>D.filterLocations("east"))}," 東部地區 "),(0,e._)("button",{type:"button","data-area":"all",class:"location-btn",onClick:o[4]||(o[4]=t=>D.filterLocations("all"))}," 全台門市 ")]),(0,e._)("div",i,[(0,e._)("button",{type:"button",class:"dropbtn",onClick:o[5]||(o[5]=(...t)=>D.toggleDropdown&&D.toggleDropdown(...t))},[(0,e.Uk)(" 請選擇區域"),c]),(0,e._)("div",{class:(0,s.C_)({"dropdown-content":!0,show:y.isDropdownOpen})},[(0,e._)("div",{"data-area":"north",class:"dropdown-btn",onClick:o[6]||(o[6]=t=>D.filterLocations("north"))}," 北部地區 "),(0,e._)("div",{"data-area":"middle",class:"dropdown-btn",onClick:o[7]||(o[7]=t=>D.filterLocations("middle"))}," 中部地區 "),(0,e._)("div",{"data-area":"south",class:"dropdown-btn",onClick:o[8]||(o[8]=t=>D.filterLocations("south"))}," 南部地區 "),(0,e._)("div",{"data-area":"east",class:"dropdown-btn",onClick:o[9]||(o[9]=t=>D.filterLocations("east"))}," 東部地區 "),(0,e._)("div",{"data-area":"all",class:"dropdown-btn",onClick:o[10]||(o[10]=t=>D.filterLocations("all"))}," 全台門市 ")],2)]),(0,e._)("table",h,[u,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(D.filteredLocations,((t,o)=>((0,e.wg)(),(0,e.iD)("tr",{class:"location-body",style:{height:"60px"},key:o},[(0,e._)("td",p,(0,s.zw)(t.store),1),(0,e._)("td",w,(0,s.zw)(t.tel),1),(0,e._)("td",_,(0,s.zw)(t.address),1)])))),128))])]),(0,e._)("table",b,[f,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(D.filteredLocations,((t,o)=>((0,e.wg)(),(0,e.iD)("tr",{style:{height:"auto"},class:"location-body",key:o},[(0,e._)("td",v,[(0,e._)("div",m,(0,s.zw)(t.store),1),(0,e._)("div",g,(0,s.zw)(t.tel),1),(0,e._)("div",k,(0,s.zw)(t.address),1)])])))),128))])]),(0,e._)("div",{class:"location-arrow",onClick:o[11]||(o[11]=(...t)=>D.goToTop&&D.goToTop(...t))},[(0,e.Wm)(C,{icon:"fa-solid fa-circle-up"})])])])}const D=t=>((0,e.dD)("data-v-47ec55a9"),t=t(),(0,e.Cn)(),t),L={class:"location-bar"},C={class:"location-element"},T=D((()=>(0,e._)("div",{class:"location-text"},"LOCATIONS",-1)));function x(t,o){const a=(0,e.up)("font-awesome-icon");return(0,e.wg)(),(0,e.iD)("div",L,[(0,e._)("div",C,[(0,e.Wm)(a,{class:"location-text",icon:"fa-solid fa-location-dot",bounce:""}),T])])}var O=a(3744);const z={},A=(0,O.Z)(z,[["render",x],["__scopeId","data-v-47ec55a9"]]);var I=A,W={data(){return{locations:[{store:"臺北北醫莊敬店",tel:"02-8732-8088",address:"台北市信義區莊敬路260巷13號",area:"north"},{store:"臺北台大公館店",tel:"02-2378-0699",address:"台北市中正區羅斯福路137巷29號",area:"north"},{store:"新北新莊中學店",tel:"02-8888-8888",address:"新北市新莊區中學路123號",area:"north"},{store:"桃園龍潭高中店",tel:"03-9999-9999",address:"桃園市龍潭區高中街456號",area:"north"},{store:"基隆市立暖暖店",tel:"02-7777-7777",address:"基隆市暖暖區市立路789號",area:"north"},{store:"新竹清大資工店",tel:"03-9876-5432",address:"新竹市東區資工路789號",area:"north"},{store:"台中一中尊賢店",tel:"04-2225-6010",address:"台中市北區尊賢街3-1號",area:"middle"},{store:"台中逢甲福星店",tel:"04-2707-9178",address:"台中市西屯區福星路22巷40號",area:"middle"},{store:"彰化師範大學店",tel:"04-3333-3333",address:"彰化縣彰化市師範路456號",area:"middle"},{store:"南投縣立大學店",tel:"049-4444-4444",address:"南投縣埔里鎮大學路789號",area:"middle"},{store:"高雄高醫博愛店",tel:"07-322-8523",address:"高雄市三民區博愛一路368-1號",area:"south"},{store:"高雄中山鼓元店",tel:"07-531-6718",address:"高雄市鼓山區鼓元街38-3號",area:"south"},{store:"屏東大學店",tel:"08-9876-5432",address:"屏東縣屏東市大學路789號",area:"south"},{store:"雲林科技大學店",tel:"05-5555-5555",address:"雲林縣斗六市科技路123號",area:"south"},{store:"台南成功大學店",tel:"06-2345-6789",address:"台南市東區大學路123號",area:"south"},{store:"嘉義中正大學店",tel:"05-7890-1234",address:"嘉義市東區中正路456號",area:"south"},{store:"宜蘭中山店",tel:"03-4567-8901",address:"宜蘭縣羅東鎮中山路123號",area:"east"},{store:"台東大學店",tel:"089-234-5678",address:"台東縣台東市大學路456號",area:"east"},{store:"宜蘭南澳技術店",tel:"089-789-0123",address:"宜蘭縣南澳鄉技術路789號",area:"east"},{store:"花蓮文藻外語店",tel:"03-1234-5678",address:"花蓮縣花蓮市外語路123號",area:"east"},{store:"花蓮慈濟中央店",tel:"03-857-1734",address:"花蓮縣吉安鄉中央路二段615-2號",area:"east"},{store:"花蓮東華大學店",tel:"03-866-1857",address:"花蓮縣壽豐鄉大學路二段33號",area:"east"}],selectedArea:"all",isDropdownOpen:!1}},components:{LocationBar:I},methods:{toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},closeDropdown(t){t.target.matches(".dropbtn")||(this.isDropdownOpen=!1)},filterLocations(t){this.selectedArea=t},goToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},computed:{filteredLocations(){return""===this.selectedArea||"all"===this.selectedArea?this.locations:this.locations.filter((t=>t.area===this.selectedArea))}},mounted(){window.addEventListener("click",this.closeDropdown),setTimeout((()=>{if(window.location.hash&&""!==window.location.hash&&window.location.hash.split("#").length>2){const t=document.querySelector("#"+window.location.hash.split("#")[window.location.hash.split("#").length-1]);null!==t&&t.scrollIntoView({behavior:"smooth"})}}),2e3)},beforeUnmount(){window.removeEventListener("click",this.closeDropdown)}};const B=(0,O.Z)(W,[["render",y],["__scopeId","data-v-15276d60"]]);var E=B}}]);
//# sourceMappingURL=231.c4bc64f9.js.map