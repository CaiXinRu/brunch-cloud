"use strict";(self["webpackChunkbrunch_cloud"]=self["webpackChunkbrunch_cloud"]||[]).push([[687],{2686:function(t,e,a){a.d(e,{Z:function(){return w}});var o=a(6252),l=a(3577);const s={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"dashDelModal"},d={class:"modal-dialog",role:"document"},i={class:"modal-content border-0"},n={class:"modal-header bg-danger text-white"},c={class:"modal-title"},r=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},p={class:"text-danger"},m={class:"modal-footer"},h=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function g(t,e,a,g,_,b){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("div",n,[(0,o._)("h5",c,[(0,o._)("span",null,"刪除 "+(0,l.zw)(a.item.title),1)]),r]),(0,o._)("div",u,[(0,o.Uk)(" 是否刪除 "),(0,o._)("strong",p,(0,l.zw)(a.item.title),1),(0,o.Uk)(" (刪除後將無法恢復)。 ")]),(0,o._)("div",m,[h,(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("del-item"))}," 確認刪除 ")])])])],512)}var _=a(7424),b=a.n(_),f={props:{item:{}},data(){return{modal:""}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(b())(this.$refs.dashDelModal)}},y=a(3744);const P=(0,y.Z)(f,[["render",g]]);var w=P},7726:function(t,e,a){a.r(e),a.d(e,{default:function(){return Ft}});var o=a(6252),l=a(3577);const s=t=>((0,o.dD)("data-v-8538e238"),t=t(),(0,o.Cn)(),t),d={class:"bg-color--white"},i={class:"container u-pt-48 u-pb-32"},n=s((()=>(0,o._)("div",{class:"s-div"},[(0,o._)("div",{class:"dp-plus"})],-1))),c=s((()=>(0,o._)("div",{class:"dp-text"},"新增餐點品項",-1))),r=[n,c],u={style:{width:"100%"},class:"dp-table"},p=s((()=>(0,o._)("thead",null,[(0,o._)("tr",{class:"dp-head"},[(0,o._)("th",{style:{width:"20%"}},"餐點類別"),(0,o._)("th",{style:{width:"20%"}},"餐點名稱"),(0,o._)("th",{style:{width:"20%"}},"原價"),(0,o._)("th",{style:{width:"20%"}},"特價"),(0,o._)("th",{style:{width:"20%"}},"是否啟用"),(0,o._)("th",{style:{width:"20%"}},"是否編輯"),(0,o._)("th",{style:{width:"20%"}},"是否刪除")])],-1))),m={style:{width:"20%"}},h={style:{width:"20%"}},g={style:{width:"20%"}},_={style:{width:"20%"}},b={style:{width:"20%"}},f={key:0,class:"color--positive"},y={key:1,class:"color--negative"},P={style:{width:"20%"}},w=["onClick"],v={style:{width:"20%"}},k=["onClick"];function M(t,e,a,s,n,c){const M=(0,o.up)("LoadingPage"),D=(0,o.up)("font-awesome-icon"),x=(0,o.up)("PaginationPage"),C=(0,o.up)("DashProductModal"),U=(0,o.up)("DashDelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.isLoading?((0,o.wg)(),(0,o.j4)(M,{key:0})):(0,o.kq)("",!0),(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("div",{class:"dp-button",onClick:e[0]||(e[0]=t=>c.openModal(!0))},r),(0,o._)("table",u,[p,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.products,(t=>((0,o.wg)(),(0,o.iD)("tr",{style:{height:"50px"},class:"color--dark-brown dp-body",key:t.id},[(0,o._)("td",m,(0,l.zw)(t.category),1),(0,o._)("td",h,(0,l.zw)(t.title),1),(0,o._)("td",g,"NT$"+(0,l.zw)(t.origin_price),1),(0,o._)("td",_,"NT$"+(0,l.zw)(t.price),1),(0,o._)("td",b,[1===t.is_enabled?((0,o.wg)(),(0,o.iD)("span",f,"啟用")):((0,o.wg)(),(0,o.iD)("span",y,"未啟用"))]),(0,o._)("td",P,[(0,o._)("button",{type:"button",class:"color--dark-brown",onClick:e=>c.openModal(!1,t)},[(0,o.Wm)(D,{icon:"fa-solid fa-pen-to-square"})],8,w)]),(0,o._)("td",v,[(0,o._)("button",{type:"button",class:"color--dark-brown",onClick:e=>c.openDelModal(t)},[(0,o.Wm)(D,{icon:"fa-solid fa-trash-can"})],8,k)])])))),128))])])])]),(0,o.Wm)(x,{pages:n.pagination,onEmitPages:c.getProducts},null,8,["pages","onEmitPages"]),(0,o.Wm)(C,{ref:"dashProductModal",product:n.tempProduct,onUpdateProduct:c.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.Wm)(U,{ref:"dashDelModal",item:n.tempProduct,onDelItem:c.delProduct},null,8,["item","onDelItem"])],64)}a(7658);var D=a(9963);const x={class:"modal fade",id:"dashProductModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"dashProductModal"},C={class:"modal-dialog modal-xl",role:"document"},U={class:"modal-content border-0"},L=(0,o._)("div",{class:"modal-header bg-dark text-white"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o._)("span",null,"新增產品")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body"},V={class:"row"},Z={class:"col-sm-4"},z={class:"mb-3"},F=(0,o._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),I={class:"mb-3"},N=(0,o._)("label",{for:"customFile",class:"form-label"},[(0,o.Uk)("或 上傳圖片 "),(0,o._)("i",{class:"fas fa-spinner fa-spin"})],-1),q=["src"],H={key:0,class:"mt-5"},W=["onUpdate:modelValue"],Y=["onClick"],j={key:0},E={class:"col-sm-8"},K={class:"mb-3"},T=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),B={class:"row gx-2"},O={class:"mb-3 col-md-6"},A=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),G={class:"mb-3 col-md-6"},J=(0,o._)("label",{for:"price",class:"form-label"},"單位",-1),Q={class:"row gx-2"},R={class:"mb-3 col-md-6"},S=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),X={class:"mb-3 col-md-6"},tt=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),et=(0,o._)("hr",null,null,-1),at={class:"mb-3"},ot=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),lt={class:"mb-3"},st=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),dt={class:"mb-3"},it={class:"form-check"},nt=(0,o._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ct={class:"modal-footer"},rt=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(t,e,a,l,s,d){const i=(0,o.up)("LoadingPage");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s.isLoading?((0,o.wg)(),(0,o.j4)(i,{key:0})):(0,o.kq)("",!0),(0,o._)("div",x,[(0,o._)("div",C,[(0,o._)("div",U,[L,(0,o._)("div",$,[(0,o._)("div",V,[(0,o._)("div",Z,[(0,o._)("div",z,[F,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[D.nr,s.tempProduct.imageUrl]])]),(0,o._)("div",I,[N,(0,o._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>d.uploadFile&&d.uploadFile(...t))},null,544)]),(0,o._)("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,q),s.tempProduct.images?((0,o.wg)(),(0,o.iD)("div",H,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.tempProduct.images,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-3 input-group",key:e},[(0,o.wy)((0,o._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>s.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,W),[[D.nr,s.tempProduct.images[e]]]),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>s.tempProduct.images.splice(e,1)}," 移除 ",8,Y)])))),128)),s.tempProduct.images[s.tempProduct.images.length-1]||!s.tempProduct.images.length?((0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>s.tempProduct.images.push(""))}," 新增圖片 ")])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),(0,o._)("div",E,[(0,o._)("div",K,[T,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[D.nr,s.tempProduct.title]])]),(0,o._)("div",B,[(0,o._)("div",O,[A,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[D.nr,s.tempProduct.category]])]),(0,o._)("div",G,[J,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[D.nr,s.tempProduct.unit]])])]),(0,o._)("div",Q,[(0,o._)("div",R,[S,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[D.nr,s.tempProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",X,[tt,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[D.nr,s.tempProduct.price,void 0,{number:!0}]])])]),et,(0,o._)("div",at,[ot,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[D.nr,s.tempProduct.description]])]),(0,o._)("div",lt,[st,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[D.nr,s.tempProduct.content]])]),(0,o._)("div",dt,[(0,o._)("div",it,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[D.e8,s.tempProduct.is_enabled]]),nt])])])])]),(0,o._)("div",ct,[rt,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=t=>d.confirm(s.tempProduct))}," 確認 ")])])])],512)],64)}var pt=a(7424),mt=a.n(pt),ht=a(2056),gt={props:{product:{type:Object,default(){return{}}}},components:{LoadingPage:ht.Z},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{},isLoading:!1}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},uploadFile(){this.isLoading=!0;const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/brunch-cloud/admin/upload";this.$http.post(a,e).then((t=>{t.data.success&&(console.log(t),this.tempProduct.imageUrl=t.data.imageUrl),this.isLoading=!1}))},confirm(t){const e=document.getElementById("customFile");e.type="text",setTimeout((()=>{e.type="file",this.$emit("update-product",t)}),50)}},emits:["update-product"],mounted(){this.modal=new(mt())(this.$refs.dashProductModal)}},_t=a(3744);const bt=(0,_t.Z)(gt,[["render",ut]]);var ft=bt,yt=a(2686);const Pt=t=>((0,o.dD)("data-v-1faf438a"),t=t(),(0,o.Cn)(),t),wt={class:"pagiantion"},vt={class:"pagination justify-content-center"},kt=Pt((()=>(0,o._)("span",{"aria-hidden":"true"},"«",-1))),Mt=[kt],Dt=["onClick"],xt=Pt((()=>(0,o._)("span",{"aria-hidden":"true"},"»",-1))),Ct=[xt];function Ut(t,e,a,s,d,i){return(0,o.wg)(),(0,o.iD)("nav",wt,[(0,o._)("ul",vt,[(0,o._)("li",{class:(0,l.C_)(["page-item",{disabled:!1===a.pages.has_pre}])},[(0,o._)("a",{href:"#",class:"page-link","aria-label":"Previous",onClick:e[0]||(e[0]=(0,D.iM)((t=>i.updatePage(a.pages.current_page-1)),["prevent"]))},Mt)],2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages.total_pages,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{class:(0,l.C_)(["page-item",{active:t===a.pages.current_page}]),key:e},[(0,o._)("a",{href:"#",class:"page-link",onClick:(0,D.iM)((e=>i.updatePage(t)),["prevent"])},(0,l.zw)(t),9,Dt)],2)))),128)),(0,o._)("li",{class:(0,l.C_)(["page-item",{disabled:!1===a.pages.has_next}])},[(0,o._)("a",{href:"#",class:"page-link","aria-label":"Next",onClick:e[1]||(e[1]=(0,D.iM)((t=>i.updatePage(a.pages.current_page+1)),["prevent"]))},Ct)],2)])])}var Lt={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}};const $t=(0,_t.Z)(Lt,[["render",Ut],["__scopeId","data-v-1faf438a"]]);var Vt=$t,Zt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{DashProductModal:ft,DashDelModal:yt.Z,LoadingPage:ht.Z,PaginationPage:Vt},methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/brunch-cloud/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{t.data.success&&(console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination),this.isLoading=!1}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t,this.$refs.dashProductModal.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/brunch-cloud/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/brunch-cloud/admin/product/${t.id}`,a="put"),this.isLoading=!0,this.$http[a](e,{data:this.tempProduct}).then((t=>{this.$refs.dashProductModal.hideModal(),this.getProducts(),this.isLoading=!1}))},openDelModal(t){this.tempProduct={...t},this.$refs.dashDelModal.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/brunch-cloud/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.$http.delete(t).then((t=>{this.$refs.dashDelModal.hideModal(),this.getProducts(),this.isLoading=!1}))}},created(){this.getProducts()}};const zt=(0,_t.Z)(Zt,[["render",M],["__scopeId","data-v-8538e238"]]);var Ft=zt}}]);
//# sourceMappingURL=687.07c90ae4.js.map