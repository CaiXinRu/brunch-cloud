(self["webpackChunkbrunch_cloud"]=self["webpackChunkbrunch_cloud"]||[]).push([[567],{2776:function(t,e,s){
/*!
  * Bootstrap toast.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,a){t.exports=a(s(4072),s(9286),s(5695),s(1127))})(0,(function(t,e,s,a){"use strict";const o=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},l=o(e),i=o(s),n="toast",r="bs.toast",c=`.${r}`,d=`mouseover${c}`,u=`mouseout${c}`,m=`focusin${c}`,h=`focusout${c}`,p=`hide${c}`,_=`hidden${c}`,f=`show${c}`,g=`shown${c}`,v="fade",k="hide",b="show",w="showing",y={animation:"boolean",autohide:"boolean",delay:"number"},C={animation:!0,autohide:!0,delay:5e3};class L extends i.default{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return C}static get DefaultType(){return y}static get NAME(){return n}show(){const e=l.default.trigger(this._element,f);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(v);const s=()=>{this._element.classList.remove(w),l.default.trigger(this._element,g),this._maybeScheduleHide()};this._element.classList.remove(k),t.reflow(this._element),this._element.classList.add(b,w),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=l.default.trigger(this._element,p);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(k),this._element.classList.remove(w,b),l.default.trigger(this._element,_)};this._element.classList.add(w),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(b),super.dispose()}isShown(){return this._element.classList.contains(b)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){l.default.on(this._element,d,(t=>this._onInteraction(t,!0))),l.default.on(this._element,u,(t=>this._onInteraction(t,!1))),l.default.on(this._element,m,(t=>this._onInteraction(t,!0))),l.default.on(this._element,h,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=L.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return a.enableDismissTrigger(L),t.defineJQueryPlugin(L),L}))},3421:function(t,e,s){"use strict";var a=s(6086),o=s(6154),l=s(7587);e["Z"]=(0,a.Q_)("cart",{state:()=>({isLoading:!1,cart:{},status:{loadingItem:""},$httpMessageState:l.Z}),getters:{},actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/brunch-cloud/cart";this.isLoading=!0,o.Z.get(t).then((t=>{console.log(t.data.data.carts.length),this.cart=t.data.data,this.isLoading=!1}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/brunch-cloud/cart/${t.id}`;this.status.loadingItem=t.id;const s={product_id:t.product_id,qty:t.qty};o.Z.put(e,{data:s}).then((t=>{this.status.loadingItem="",this.getCart()}))},plusCount(t){t.qty+=1,this.updateCart(t)},minusCount(t){t.qty>1?(t.qty-=1,this.updateCart(t)):1===t.qty&&this.removeCartItem(t.id)},removeCartItem(t){const e=`https://vue3-course-api.hexschool.io/api/brunch-cloud/cart/${t}`;this.isLoading=!0,o.Z["delete"](e).then((t=>{this.$httpMessageState(t,"移除購物車品項"),this.getCart(),this.isLoading=!1}))}}})},7634:function(t,e,s){"use strict";s(7658);var a=s(6086),o=s(6154);e["Z"]=(0,a.Q_)("product",{state:()=>({isLoading:!1,products:[],filteredLikes:[]}),actions:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/brunch-cloud/products/all";this.isLoading=!0,o.Z.get(t).then((t=>{this.products=t.data.products;const e=localStorage.getItem("likeIdArr");if(e){const t=JSON.parse(e);for(const e of t)for(const t of this.products)t.id===e&&(t.like=!0)}this.filteredLikes=this.products.filter((t=>t.like)),this.isLoading=!1}))},toggleLike(t){t.like=!t.like;const e=[];for(const s of this.products)s.like&&e.push(s.id);localStorage.setItem("likeIdArr",JSON.stringify(e)),this.filteredLikes=this.products.filter((t=>t.like))}},getters:{filteredBurgerLikes(){return this.filteredLikes.filter((t=>"太空漢堡"===t.category))},filteredSandwichLikes(){return this.filteredLikes.filter((t=>"飄浮吐司"===t.category))},filteredRiceNoodlesLikes(){return this.filteredLikes.filter((t=>"柔情飯麵"===t.category))},filteredSnackLikes(){return this.filteredLikes.filter((t=>"輕盈小點"===t.category))},filteredDrinksLikes(){return this.filteredLikes.filter((t=>"沁涼飲品"===t.category))}}})},870:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return Ye}});var a=s(6252),o=s(3577);const l={class:"div-flex"};function i(t,e,s,i,n,r){const c=(0,a.up)("NavBarSm"),d=(0,a.up)("NavBar"),u=(0,a.up)("ToastMessages"),m=(0,a.up)("router-view"),h=(0,a.up)("FooterBar"),p=(0,a.up)("NavBarFooter");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(c,{class:"sticky-top",style:(0,o.j5)({top:n.navbarTop})},null,8,["style"]),(0,a.Wm)(d),(0,a.Wm)(u),(0,a.Wm)(m),(0,a.Wm)(h),(0,a.Wm)(p)])}var n=s(9963),r=s.p+"img/logo_light-brown.ff486ce6.png",c=s.p+"img/logo+word_hor.f957f68e.png";const d=t=>((0,a.dD)("data-v-20c22116"),t=t(),(0,a.Cn)(),t),u={class:"navbar bg-color--secondary"},m={class:"container"},h={class:"logo"},p=d((()=>(0,a._)("img",{src:r,alt:"雲端早午安"},null,-1))),_={class:"list-toggle-sm"},f=d((()=>(0,a._)("div",{class:"list-sub"},"See More",-1))),g={class:"list-bar"},v={class:"list"},k=d((()=>(0,a._)("span",null,"立即點餐",-1))),b=d((()=>(0,a._)("li",null,[(0,a._)("p",{class:"color--light-brown main-font-1"},"｜")],-1))),w=d((()=>(0,a._)("span",null,"促銷優惠",-1))),y=d((()=>(0,a._)("li",null,[(0,a._)("p",{class:"color--light-brown main-font-1"},"｜")],-1))),C=d((()=>(0,a._)("span",null,"門市據點",-1))),L={class:"list-sm"},W=d((()=>(0,a._)("li",null,[(0,a._)("img",{class:"list-img-sm",src:c,alt:"雲端早午安"})],-1))),O=d((()=>(0,a._)("span",null,"立即點餐",-1))),M=d((()=>(0,a._)("span",null,"促銷優惠",-1))),I=d((()=>(0,a._)("span",null,"門市據點",-1))),D={class:"top-right-btn"},B={key:0,class:"number-cart"},Z={key:0,class:"number-cart"},P={key:1,class:"number-cart"};function T(t,e,s,l,i,r){const c=(0,a.up)("router-link"),d=(0,a.up)("font-awesome-icon"),T=(0,a.up)("CartBar");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",u,[(0,a._)("div",m,[(0,a._)("div",h,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a._)("div",_,[(0,a._)("div",{class:"list-toggle",onClick:e[0]||(e[0]=e=>t.isPopupListOpen=!0)},[f,(0,a.Wm)(d,{class:"list-icon",icon:"fa-solid fa-angles-up"})])]),(0,a._)("div",g,[(0,a._)("ul",v,[(0,a._)("li",null,[(0,a.Wm)(c,{to:"/menu",class:"main-font","date-link-alt":"MENU"},{default:(0,a.w5)((()=>[k])),_:1})]),b,(0,a._)("li",null,[(0,a.Wm)(c,{to:"/promotions",class:"main-font","date-link-alt":"PROMOTIONS"},{default:(0,a.w5)((()=>[w])),_:1})]),y,(0,a._)("li",null,[(0,a.Wm)(c,{to:"/locations",class:"main-font","date-link-alt":"LOCATIONS"},{default:(0,a.w5)((()=>[C])),_:1})])])]),(0,a._)("div",{id:"popup-list",class:(0,o.C_)({"list-bar-sm":!0,"popup-open":t.isPopupListOpen})},[(0,a._)("div",{class:"list-close-sm",onClick:e[1]||(e[1]=e=>t.isPopupListOpen=!1)},[(0,a.Wm)(d,{icon:"fa-solid fa-circle-xmark"})]),(0,a._)("ul",L,[W,(0,a._)("li",null,[(0,a.Wm)(c,{to:"/menu",class:"main-font-sm","date-link-alt":"MENU",onClick:e[2]||(e[2]=e=>t.isPopupListOpen=!1)},{default:(0,a.w5)((()=>[O])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(c,{to:"/promotions",class:"main-font-sm","date-link-alt":"PROMOTIONS",onClick:e[3]||(e[3]=e=>t.isPopupListOpen=!1)},{default:(0,a.w5)((()=>[M])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(c,{to:"/locations",class:"main-font-sm","date-link-alt":"LOCATIONS",onClick:e[4]||(e[4]=e=>t.isPopupListOpen=!1)},{default:(0,a.w5)((()=>[I])),_:1})])])],2),(0,a._)("div",D,[(0,a._)("nav",null,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("span",null,[(0,a.Wm)(d,{icon:"fa-solid fa-heart"}),t.filteredLikes.length>0?((0,a.wg)(),(0,a.iD)("div",B,(0,o.zw)(t.filteredLikes.length),1)):(0,a.kq)("",!0)]),(0,a._)("span",null,[(0,a.Wm)(c,{to:"/favorites"},{default:(0,a.w5)((()=>[(0,a.Uk)("我的最愛")])),_:1})])]),(0,a._)("li",null,[(0,a._)("span",null,[(0,a.Wm)(d,{icon:"fa-solid fa-cart-shopping"}),t.cart?.carts?.length?((0,a.wg)(),(0,a.iD)("div",Z,(0,o.zw)(this.cart?.carts?.length),1)):((0,a.wg)(),(0,a.iD)("div",P," ! "))]),(0,a._)("span",null,[(0,a._)("a",{href:"#",onClick:e[5]||(e[5]=(0,n.iM)(((...t)=>r.showModal&&r.showModal(...t)),["prevent"]))},"購物清單")])])])])])])]),(0,a.Wm)(T,{id:"cartModalNavBar",modelValue:t.isCartBarOpen,"onUpdate:modelValue":e[6]||(e[6]=e=>{t.isCartBarOpen=e})},null,8,["modelValue"])])}const N=t=>((0,a.dD)("data-v-2d7bca1e"),t=t(),(0,a.Cn)(),t),q=["id"],S={class:"cb-container"},$={class:"cb-head"},x=N((()=>(0,a._)("div",{class:"cbh-text"},"購物清單",-1))),U={key:0,class:"u-mt-16 u-ml-4 u-mr-4"},z=N((()=>(0,a._)("tr",{class:"cb-thead"},[(0,a._)("th",{style:{width:"20%"}}),(0,a._)("th",{style:{width:"30%"}},"品名"),(0,a._)("th",{style:{width:"20%"}},"單價"),(0,a._)("th",{style:{width:"20%"}},"數量"),(0,a._)("th",{style:{width:"10%"}})],-1))),V=[z],E={key:1,class:"cb-content"},F={key:0,style:{width:"100%"}},A={style:{width:"20%"},class:"cb-img"},j={style:{width:"30%"}},R={style:{width:"20%"}},H={class:"cb-sprice"},K={class:"color--brown cb-price"},Q={style:{width:"20%"}},J={class:"cb-number"},Y={class:"cb-count-num"},X={style:{width:"10%"}},G=["onClick"],tt={key:2,class:"cb-content2"},et=N((()=>(0,a._)("div",null,"您尚未選取任何餐點喔！",-1))),st={key:3},at=N((()=>(0,a._)("td",{style:{width:"20%"},class:"color--secondary"},"總價",-1))),ot={style:{width:"30%"},class:"color--dark-brown"};function lt(t,e,s,l,i,n){const r=(0,a.up)("LodingPageModal"),c=(0,a.up)("ToastMessages"),d=(0,a.up)("font-awesome-icon"),u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("dialog",{id:s.id,ref:"cartModal",class:(0,o.C_)({"show-modal":s.modelValue,cartModal:!0})},[t.isLoading?((0,a.wg)(),(0,a.j4)(r,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(c),(0,a._)("div",S,[(0,a._)("div",$,[(0,a._)("div",{class:"cbh-close",onClick:e[0]||(e[0]=(...t)=>n.closeModal&&n.closeModal(...t))},[(0,a.Wm)(d,{icon:"fa-solid fa-angle-right"})]),x]),t.cart?.carts?.length?((0,a.wg)(),(0,a.iD)("thead",U,V)):(0,a.kq)("",!0),t.cart?.carts?.length?((0,a.wg)(),(0,a.iD)("div",E,[t.cart.carts.length?((0,a.wg)(),(0,a.iD)("table",F,[(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.cart.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{class:"color--dark-brown",key:e.id},[(0,a._)("td",A,[(0,a._)("div",{class:"cb-img-inner",style:(0,o.j5)({backgroundImage:`url(${e.product.imageUrl})`})},null,4)]),(0,a._)("td",j,(0,o.zw)(e.product.title),1),(0,a._)("td",R,[(0,a._)("p",H,"特價 NT$"+(0,o.zw)(e.product.price),1),(0,a._)("p",K," 原價 NT$"+(0,o.zw)(e.product.origin_price),1)]),(0,a._)("td",Q,[(0,a._)("div",J,[(0,a.Wm)(d,{class:(0,o.C_)(["cb-count",{disabled:t.status.loadingItem===e.id}]),icon:"fa-regular fa-square-minus",onClick:s=>t.minusCount(e)},null,8,["class","onClick"]),(0,a._)("div",Y,(0,o.zw)(e.qty),1),(0,a.Wm)(d,{class:(0,o.C_)(["cb-count",{disabled:t.status.loadingItem===e.id}]),icon:"fa-regular fa-square-plus",onClick:s=>t.plusCount(e)},null,8,["class","onClick"])])]),(0,a._)("td",X,[(0,a._)("button",{type:"button",class:"cb-delete",onClick:s=>t.removeCartItem(e.id)},[(0,a.Wm)(d,{icon:"fa-solid fa-trash-can"})],8,G)])])))),128))])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),t.cart?.carts?.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",tt,[(0,a.Wm)(d,{class:"color--secondary",style:{"font-size":"70px","margin-bottom":"10px"},icon:"fa-solid fa-cloud",bounce:""}),et,(0,a.Wm)(u,{to:"/menu",class:"order-btn",onClick:n.closeModal},{default:(0,a.w5)((()=>[(0,a.Uk)("點我立即看菜單")])),_:1},8,["onClick"])])),t.cart?.carts?.length?((0,a.wg)(),(0,a.iD)("tfoot",st,[(0,a._)("tr",null,[at,(0,a._)("td",ot," NT$"+(0,o.zw)(t.$filters.currency(t.cart.final_total)),1)]),(0,a.Wm)(u,{to:"/checklist",class:"cb-checkout",onClick:n.closeModal},{default:(0,a.w5)((()=>[(0,a.Uk)(" 訂單結帳 ")])),_:1},8,["onClick"])])):(0,a.kq)("",!0)])],10,q)])}var it=s(8508);const nt=t=>((0,a.dD)("data-v-b239ba4c"),t=t(),(0,a.Cn)(),t),rt={class:"loading-bg"},ct=nt((()=>(0,a._)("img",{src:it,alt:"Loading..."},null,-1))),dt=[ct];function ut(t,e){return(0,a.wg)(),(0,a.iD)("div",rt,dt)}var mt=s(3744);const ht={},pt=(0,mt.Z)(ht,[["render",ut],["__scopeId","data-v-b239ba4c"]]);var _t=pt,ft=s(6086),gt=s(3421),vt=s(5820);const kt={class:"toast-container position-absolute pe-3 top-0 end-0",style:{"z-index":"1050"}};function bt(t,e,s,o,l,i){const n=(0,a.up)("ToastPage");return(0,a.wg)(),(0,a.iD)("div",kt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.messages,((t,e)=>((0,a.wg)(),(0,a.j4)(n,{key:e,msg:t},null,8,["msg"])))),128))])}s(7658);const wt=t=>((0,a.dD)("data-v-6b38d756"),t=t(),(0,a.Cn)(),t),yt={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},Ct={class:"toast-header"},Lt={class:"me-auto"},Wt=wt((()=>(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1))),Ot={key:0,class:"toast-body"};function Mt(t,e,s,l,i,n){return(0,a.wg)(),(0,a.iD)("div",yt,[(0,a._)("div",Ct,[(0,a._)("span",{class:(0,o.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a._)("strong",Lt,(0,o.zw)(s.msg.title),1),Wt]),s.msg.content?((0,a.wg)(),(0,a.iD)("div",Ot,(0,o.zw)(s.msg.content),1)):(0,a.kq)("",!0)],512)}var It=s(2776),Dt=s.n(It),Bt={props:["msg"],mounted(){const t=this.$refs.toast,e=new(Dt())(t,{delay:6e3});e.show()}};const Zt=(0,mt.Z)(Bt,[["render",Mt],["__scopeId","data-v-6b38d756"]]);var Pt=Zt,Tt={components:{ToastPage:Pt},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:a}=t;this.messages.push({style:e,title:s,content:a})}))}};const Nt=(0,mt.Z)(Tt,[["render",bt],["__scopeId","data-v-013d304a"]]);var qt=Nt,St={emits:["update:modelValue"],props:{id:{type:String,required:!0},modelValue:{type:Boolean,required:!0}},data:()=>({}),components:{LodingPageModal:_t,ToastMessages:qt},provide(){return{emitter:vt.Z}},watch:{modelValue(){this.modelValue&&this.getCart()}},computed:{...(0,ft.rn)(gt.Z,["isLoading","cart","status"])},methods:{...(0,ft.nv)(gt.Z,["getCart","updateCart","removeCartItem","plusCount","minusCount"]),closeModal(){this.$emit("update:modelValue",!1),this.$refs.cartModal.close()}},created(){this.getCart()}};const $t=(0,mt.Z)(St,[["render",lt],["__scopeId","data-v-2d7bca1e"]]);var xt=$t,Ut=s(7634),zt={data:()=>({isCartBarOpen:!1,isPopupListOpen:!1}),components:{CartBar:xt},computed:{...(0,ft.rn)(Ut.Z,["isLoading","products","filteredLikes"]),...(0,ft.rn)(gt.Z,["cart"])},methods:{...(0,ft.nv)(gt.Z,["getCart"]),...(0,ft.nv)(Ut.Z,["getProducts","toggleLike"]),showModal(){this.isCartBarOpen=!0;const t=document.getElementById("cartModalNavBar");t.showModal()}},mounted(){this.getProducts()}};const Vt=(0,mt.Z)(zt,[["render",T],["__scopeId","data-v-20c22116"]]);var Et=Vt;const Ft=t=>((0,a.dD)("data-v-95a7e54a"),t=t(),(0,a.Cn)(),t),At={class:"navbar-sm bg-color--secondary"},jt={class:"container"},Rt=Ft((()=>(0,a._)("img",{src:c,alt:"雲端早午安"},null,-1))),Ht={class:"list-bar"},Kt={class:"list"},Qt=Ft((()=>(0,a._)("span",null,"立即點餐",-1))),Jt=Ft((()=>(0,a._)("li",null,[(0,a._)("p",{class:"color--light-brown main-font-1"},"｜")],-1))),Yt=Ft((()=>(0,a._)("span",null,"促銷優惠",-1))),Xt=Ft((()=>(0,a._)("li",null,[(0,a._)("p",{class:"color--light-brown main-font-1"},"｜")],-1))),Gt=Ft((()=>(0,a._)("span",null,"門市據點",-1))),te={class:"list-sm"},ee=Ft((()=>(0,a._)("li",null,[(0,a._)("img",{class:"list-img-sm",src:c,alt:"雲端早午安"})],-1))),se=Ft((()=>(0,a._)("span",null,"立即點餐",-1))),ae=Ft((()=>(0,a._)("span",null,"促銷優惠",-1))),oe=Ft((()=>(0,a._)("span",null,"門市據點",-1))),le={class:"top-right-btn"},ie={key:0,class:"number-cart"},ne={key:0,class:"number-cart"},re={key:1,class:"number-cart"};function ce(t,e,s,l,i,r){const c=(0,a.up)("router-link"),d=(0,a.up)("font-awesome-icon"),u=(0,a.up)("CartBar");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",At,[(0,a._)("div",jt,[(0,a.Wm)(c,{to:"/",class:"logo"},{default:(0,a.w5)((()=>[Rt])),_:1}),(0,a._)("div",Ht,[(0,a._)("ul",Kt,[(0,a._)("li",null,[(0,a.Wm)(c,{to:"/menu",class:"main-font","date-link-alt":"MENU"},{default:(0,a.w5)((()=>[Qt])),_:1})]),Jt,(0,a._)("li",null,[(0,a.Wm)(c,{to:"/promotions",class:"main-font","date-link-alt":"PROMOTIONS"},{default:(0,a.w5)((()=>[Yt])),_:1})]),Xt,(0,a._)("li",null,[(0,a.Wm)(c,{to:"/locations",class:"main-font","date-link-alt":"LOCATIONS"},{default:(0,a.w5)((()=>[Gt])),_:1})])])]),(0,a._)("div",{id:"popup-list",class:(0,o.C_)({"list-bar-sm":!0,"popup-open":t.isPopupListOpen})},[(0,a._)("div",{class:"list-close-sm",onClick:e[0]||(e[0]=e=>t.isPopupListOpen=!1)},[(0,a.Wm)(d,{icon:"fa-solid fa-circle-xmark"})]),(0,a._)("ul",te,[ee,(0,a._)("li",null,[(0,a.Wm)(c,{to:"/menu",class:"main-font-sm","date-link-alt":"MENU",onClick:e[1]||(e[1]=e=>t.isPopupListOpen=!1)},{default:(0,a.w5)((()=>[se])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(c,{to:"/promotions",class:"main-font-sm","date-link-alt":"PROMOTIONS",onClick:e[2]||(e[2]=e=>t.isPopupListOpen=!1)},{default:(0,a.w5)((()=>[ae])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(c,{to:"/locations",class:"main-font-sm","date-link-alt":"LOCATIONS",onClick:e[3]||(e[3]=e=>t.isPopupListOpen=!1)},{default:(0,a.w5)((()=>[oe])),_:1})])])],2),(0,a._)("div",le,[(0,a._)("nav",null,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("span",null,[(0,a.Wm)(d,{icon:"fa-solid fa-heart"}),t.filteredLikes.length>0?((0,a.wg)(),(0,a.iD)("div",ie,(0,o.zw)(t.filteredLikes.length),1)):(0,a.kq)("",!0)]),(0,a._)("span",null,[(0,a.Wm)(c,{to:"/favorites"},{default:(0,a.w5)((()=>[(0,a.Uk)("我的最愛")])),_:1})])]),(0,a._)("li",null,[(0,a._)("span",null,[(0,a.Wm)(d,{icon:"fa-solid fa-cart-shopping"}),t.cart?.carts?.length?((0,a.wg)(),(0,a.iD)("div",ne,(0,o.zw)(this.cart?.carts?.length),1)):((0,a.wg)(),(0,a.iD)("div",re," ! "))]),(0,a._)("span",null,[(0,a._)("a",{href:"#",onClick:e[4]||(e[4]=(0,n.iM)(((...t)=>r.showModal&&r.showModal(...t)),["prevent"]))},"購物清單")])])])])]),(0,a._)("div",{class:"list-toggle",onClick:e[5]||(e[5]=e=>t.isPopupListOpen=!0)},[(0,a.Wm)(d,{icon:"fa-solid fa-bars"})])])]),(0,a.Wm)(u,{id:"cartModalNavBarSm",modelValue:t.isCartBarOpen,"onUpdate:modelValue":e[6]||(e[6]=e=>{t.isCartBarOpen=e})},null,8,["modelValue"])])}var de={data:()=>({isCartBarOpen:!1,isPopupListOpen:!1}),components:{CartBar:xt},computed:{...(0,ft.rn)(Ut.Z,["isLoading","products","filteredLikes"]),...(0,ft.rn)(gt.Z,["cart"])},methods:{...(0,ft.nv)(gt.Z,["getCart"]),...(0,ft.nv)(Ut.Z,["getProducts","toggleLike"]),showModal(){this.isCartBarOpen=!0;const t=document.getElementById("cartModalNavBarSm");t.showModal()}},mounted(){this.getProducts()}};const ue=(0,mt.Z)(de,[["render",ce],["__scopeId","data-v-95a7e54a"]]);var me=ue,he=s.p+"img/logo+word_ver.11a545f0.png";const pe=t=>((0,a.dD)("data-v-2d694639"),t=t(),(0,a.Cn)(),t),_e={class:"bg-color--light-brown"},fe={class:"container"},ge={class:"footer"},ve=pe((()=>(0,a._)("div",{class:"logo"},[(0,a._)("img",{src:he,alt:"雲端早午安"})],-1))),ke={class:"footer-content"},be=(0,a.uE)('<div class="footer-text color--secondary" data-v-2d694639> 營業時間 05:30~14:30 (最後點餐時間14:15) </div><div class="footer-text color--secondary" data-v-2d694639> 加盟專線 <a href="tel:+0975173513" class="footer-a" data-v-2d694639>0975-173513</a></div><div class="footer-text color--secondary" data-v-2d694639> 電子郵件 <a href="mailto:brunchincloud@gmail.com" class="footer-a" data-v-2d694639>brunchincloud@gmail.com</a></div>',3),we={class:"footer-text color--brown"},ye={class:"footer-content-sm"},Ce=(0,a.uE)('<div class="footer-text color--secondary" data-v-2d694639> 營業時間 <span data-v-2d694639>05:30~14:30 (最後點餐時間14:15)</span></div><div class="footer-text color--secondary" data-v-2d694639> 加盟專線 <a href="tel:+0975173513" class="footer-a" data-v-2d694639>0975-173513</a></div><div class="footer-text color--secondary" data-v-2d694639> 電子郵件 <a href="mailto:brunchincloud@gmail.com" class="footer-a" data-v-2d694639>brunchincloud@gmail.com</a></div><div class="footer-text color--brown" data-v-2d694639> 本網站僅供個人作品使用，<span data-v-2d694639>無作任何商業用途</span></div>',4),Le={class:"footer-icons-sm"},We={href:"https://line.me/ti/p/5AZebOZFkr",target:"_blank",class:"footer-icon-1"},Oe={href:"https://www.facebook.com/lu.kyuhyun/",target:"_blank",class:"footer-icon"},Me={href:"https://www.instagram.com/lu_kyuhyun/",target:"_blank",class:"footer-icon"},Ie={href:"https://github.com/CaiXinRu",target:"_blank",class:"footer-icon"},De={class:"footer-icons"},Be={href:"https://line.me/ti/p/5AZebOZFkr",target:"_blank",class:"footer-icon-1"},Ze={href:"https://www.facebook.com/lu.kyuhyun/",target:"_blank",class:"footer-icon"},Pe={href:"https://www.instagram.com/lu_kyuhyun/",target:"_blank",class:"footer-icon"},Te={href:"https://github.com/CaiXinRu",target:"_blank",class:"footer-icon"};function Ne(t,e){const s=(0,a.up)("router-link"),o=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("body",null,[(0,a._)("footer",null,[(0,a._)("div",_e,[(0,a._)("div",fe,[(0,a._)("div",ge,[ve,(0,a._)("div",ke,[be,(0,a._)("div",we,[(0,a.Uk)(" 本網站僅供個人作品使用，無作任何商業用途｜ "),(0,a.Wm)(s,{to:"/login",class:"footer-login"},{default:(0,a.w5)((()=>[(0,a.Uk)("登入後台")])),_:1})])]),(0,a._)("div",ye,[Ce,(0,a.Wm)(s,{to:"/login",class:"footer-text footer-login"},{default:(0,a.w5)((()=>[(0,a.Uk)("｜登入後台｜ ")])),_:1}),(0,a._)("div",Le,[(0,a._)("div",null,[(0,a._)("a",We,[(0,a.Wm)(o,{icon:"fa-brands fa-line"})])]),(0,a._)("div",null,[(0,a._)("a",Oe,[(0,a.Wm)(o,{icon:"fa-brands fa-square-facebook"})])]),(0,a._)("div",null,[(0,a._)("a",Me,[(0,a.Wm)(o,{icon:"fa-brands fa-square-instagram"})])]),(0,a._)("div",null,[(0,a._)("a",Ie,[(0,a.Wm)(o,{icon:"fa-brands fa-square-github"})])])])]),(0,a._)("div",De,[(0,a._)("div",null,[(0,a._)("a",Be,[(0,a.Wm)(o,{icon:"fa-brands fa-line"})])]),(0,a._)("div",null,[(0,a._)("a",Ze,[(0,a.Wm)(o,{icon:"fa-brands fa-square-facebook"})])]),(0,a._)("div",null,[(0,a._)("a",Pe,[(0,a.Wm)(o,{icon:"fa-brands fa-square-instagram"})])]),(0,a._)("div",null,[(0,a._)("a",Te,[(0,a.Wm)(o,{icon:"fa-brands fa-square-github"})])])])])])])])])}const qe={},Se=(0,mt.Z)(qe,[["render",Ne],["__scopeId","data-v-2d694639"]]);var $e=Se;const xe=t=>((0,a.dD)("data-v-fa59aba6"),t=t(),(0,a.Cn)(),t),Ue={class:"navbar-footer"},ze={key:0,class:"number-cart"},Ve=xe((()=>(0,a._)("span",null,"我的最愛",-1))),Ee={key:0,class:"number-cart"},Fe={key:1,class:"number-cart"},Ae=xe((()=>(0,a._)("span",null,"購物清單",-1)));function je(t,e,s,l,i,n){const r=(0,a.up)("font-awesome-icon"),c=(0,a.up)("router-link"),d=(0,a.up)("CartBar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",Ue,[(0,a._)("nav",null,[(0,a._)("ul",null,[(0,a.Wm)(c,{to:"/favorites",class:"nf-link"},{default:(0,a.w5)((()=>[(0,a._)("li",null,[(0,a._)("span",null,[(0,a.Wm)(r,{icon:"fa-solid fa-heart"}),t.filteredLikes.length>0?((0,a.wg)(),(0,a.iD)("div",ze,(0,o.zw)(t.filteredLikes.length),1)):(0,a.kq)("",!0)]),Ve])])),_:1}),(0,a._)("div",{onClick:e[0]||(e[0]=(...t)=>n.showModal&&n.showModal(...t)),class:"nf-link"},[(0,a._)("li",null,[(0,a._)("span",null,[(0,a.Wm)(r,{icon:"fa-solid fa-cart-shopping"}),t.cart?.carts?.length?((0,a.wg)(),(0,a.iD)("div",Ee,(0,o.zw)(this.cart?.carts?.length),1)):((0,a.wg)(),(0,a.iD)("div",Fe," ! "))]),Ae])])])])]),(0,a.Wm)(d,{id:"cartModalNavBarFooter",modelValue:t.isCartBarOpen,"onUpdate:modelValue":e[1]||(e[1]=e=>{t.isCartBarOpen=e})},null,8,["modelValue"])],64)}var Re={data:()=>({isCartBarOpen:!1,isPopupListOpen:!1}),components:{CartBar:xt},computed:{...(0,ft.rn)(Ut.Z,["isLoading","products","filteredLikes"]),...(0,ft.rn)(gt.Z,["cart"])},methods:{...(0,ft.nv)(gt.Z,["getCart"]),...(0,ft.nv)(Ut.Z,["getProducts","toggleLike"]),showModal(){this.isCartBarOpen=!0;const t=document.getElementById("cartModalNavBarFooter");t.showModal()}},mounted(){this.getProducts()}};const He=(0,mt.Z)(Re,[["render",je],["__scopeId","data-v-fa59aba6"]]);var Ke=He,Qe={data(){return{navbarTop:"-50%"}},components:{NavBar:Et,NavBarSm:me,FooterBar:$e,NavBarFooter:Ke,ToastMessages:qt},provide(){return{emitter:vt.Z}},mounted(){window.addEventListener("scroll",this.scrollFunction)},beforeUnmount(){window.removeEventListener("scroll",this.scrollFunction)},methods:{scrollFunction(){document.body.scrollTop>100||document.documentElement.scrollTop>100?this.navbarTop="0":this.navbarTop="-50%"}}};const Je=(0,mt.Z)(Qe,[["render",i],["__scopeId","data-v-50775de9"]]);var Ye=Je}}]);
//# sourceMappingURL=567.d72f9d6b.js.map