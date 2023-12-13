(()=>{"use strict";var e={7729:(e,t,r)=>{r.r(t),r.d(t,{default:()=>pe});var n=r(885),o=r(2252),a=r(2323),i=r(7099),l=r(7277),d=r(2268),s=r(5861),u=r(5871),c=r(1169),f=r(2882),g=r(8067),h=r(6761),p=r(6909),y=r(7467),x=r(5930),m=r(3181),j=(0,o.createContext)({userId:null,login:function(){},logout:function(){}}),b=function(e){var t=e.children,r=(0,o.useState)(null),a=(0,n.default)(r,2),i=a[0],l=a[1];(0,o.useEffect)((function(){d()}),[]);var d=function(){var e=(0,s.default)((function*(){try{var e=yield x.default.getItem("userId");l(e)}catch(t){console.error("Error loading userId from AsyncStorage:",t)}}));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.default)((function*(e){try{yield x.default.setItem("userId",e),l(e)}catch(t){console.error("Error saving userId to AsyncStorage:",t)}}));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,s.default)((function*(){try{yield x.default.removeItem("userId"),l(null)}catch(e){console.error("Error removing userId from AsyncStorage:",e)}}));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(j.Provider,{value:{userId:i,login:u,logout:c},children:t})};const C=j;const v=r(2145).default.create({baseURL:"https://odicult.fruitnasta.com/api"});var S=h.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",padding:20,backgroundColor:"#f9f9f9"},heading:{fontSize:24,fontWeight:"bold",marginBottom:20,color:"#007BFF"},input:{width:"100%",height:40,borderWidth:1,borderColor:"#ccc",borderRadius:8,paddingHorizontal:10,marginBottom:20},loginButton:{backgroundColor:"#007BFF",paddingVertical:12,paddingHorizontal:24,borderRadius:8},loginButtonText:{color:"#fff",fontSize:18,fontWeight:"bold",textAlign:"center"},registerLink:{marginTop:10},registerLinkText:{color:"#007BFF",fontSize:16,fontWeight:"bold"}});const w=function(e){e.navigation;var t=(0,o.useState)(""),r=(0,n.default)(t,2),a=r[0],i=r[1],l=(0,o.useState)(""),d=(0,n.default)(l,2),h=d[0],x=d[1],j=(0,o.useState)(!1),b=(0,n.default)(j,2),w=b[0],B=b[1],P=(0,o.useContext)(C).login,T=function(){var e=(0,s.default)((function*(){try{B(!0),yield v.post("/admin/login",{email:a,password:h}).then((function(e){if(e){var t=e.data.token;P(t)}}))}catch(e){console.error("Error logging in:",e),alert("Failed to login. Please check your credentials.")}finally{B(!1)}}));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)(u.default,{style:S.container,children:[(0,m.jsx)(y.default,{name:"account-circle",size:100,color:"#007BFF"}),(0,m.jsx)(c.default,{style:S.heading,children:"Admin Login"}),(0,m.jsx)(f.default,{style:S.input,placeholder:"Email",value:a,onChangeText:i,autoCapitalize:"none"}),(0,m.jsx)(f.default,{style:S.input,placeholder:"Password",value:h,onChangeText:x,secureTextEntry:!0}),(0,m.jsx)(g.default,{style:S.loginButton,onPress:T,children:w?(0,m.jsx)(p.default,{size:"small",color:"#fff"}):(0,m.jsx)(c.default,{style:S.loginButtonText,children:"Login"})})]})};r(4656);var B=r(4942),P=r(8330),T=r(2604),k=r(7628),O=r(8590),F=r(488),R=r(9180),z=r(706),E=r(7565),I=r(8069),L=r(3191),D=r(2058);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,B.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=h.default.create({container:{flex:1,padding:16,backgroundColor:"#f9f9f9"},filterContainer:{flexDirection:"row",alignItems:"center",marginBottom:16},pickerContainer:{flex:1,borderWidth:1,borderColor:"#007BFF",borderRadius:4,overflow:"hidden"},picker:{height:40,backgroundColor:"#fff"},searchInput:{flex:1,marginRight:8,backgroundColor:"#fff"},flatListContent:{paddingBottom:80},card:{marginBottom:16,borderRadius:8,elevation:4,backgroundColor:"#fff"},detailsContainer:{marginTop:12},detailRow:{flexDirection:"row",marginBottom:8},detailLabel:{flex:1,fontWeight:"bold"},detailValue:{flex:2},cardActions:{justifyContent:"flex-end",marginTop:16},modalCard:{margin:16,backgroundColor:"#fff",padding:16,borderRadius:8},modalCardActions:{justifyContent:"flex-end",marginTop:16},loader:{flex:1,justifyContent:"center",alignItems:"center"},radioButtonContainer:{flexDirection:"row",alignItems:"center",marginBottom:8},modalCardContent:{paddingTop:8},emptyListContainer:{flex:1,justifyContent:"center",alignItems:"center"},emptyListText:{fontSize:16,fontWeight:"bold",color:"gray"}});const U=function(){var e=(0,o.useState)([]),t=(0,n.default)(e,2),r=t[0],a=t[1],i=(0,o.useState)([]),l=(0,n.default)(i,2),d=l[0],f=l[1],g=(0,o.useState)(!1),h=(0,n.default)(g,2),y=h[0],x=h[1],j=(0,o.useState)({}),b=(0,n.default)(j,2),C=b[0],S=b[1],w=(0,o.useState)(""),B=(0,n.default)(w,2),V=B[0],U=B[1],M=(0,o.useState)("All"),N=(0,n.default)(M,2),_=N[0],H=N[1],q=(0,o.useState)(!1),$=(0,n.default)(q,2),Q=$[0],X=$[1],Y=(0,o.useState)(!1),G=(0,n.default)(Y,2),J=G[0],K=G[1];(0,o.useEffect)((function(){Z()}),[]);var Z=function(){var e=(0,s.default)((function*(){K(!0);try{var e=(yield v.get("/orders/")).data.reverse()||[];a(e),ee(V,e,_)}catch(t){console.error("Error fetching orders:",t)}finally{K(!1),X(!1)}}));return function(){return e.apply(this,arguments)}}(),ee=function(e,t,r){var n=t;"All"!==r&&(n=n.filter((function(e){return e.status===r}))),""!==e.trim()&&(n=n.filter((function(t){return t._id.toLowerCase().includes(e.toLowerCase())}))),f(n)};(0,o.useEffect)((function(){ee(V,r,_)}),[V,r,_]);var te=function(){x(!1),S({})},re=function(){var e=(0,s.default)((function*(){X(!0);try{yield v.put(`/orders/${C._id}`,C),x(!1),Z()}catch(e){console.error("Error updating order:",e)}finally{X(!1)}}));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=(0,s.default)((function*(e){try{T.default.alert("Confirm Delete","Are you sure you want to delete this order?",[{text:"Cancel",style:"cancel"},{text:"Delete",style:"destructive",onPress:function(){return oe(e)}}])}catch(t){console.error("Error deleting order:",t)}}));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=(0,s.default)((function*(e){try{yield v.delete(`/orders/${e}`),Z()}catch(t){console.error("Error deleting order:",t)}}));return function(t){return e.apply(this,arguments)}}(),ae=["Processing","Order Confirmed","Shipped","Delivered"];return(0,m.jsxs)(u.default,{style:A.container,children:[(0,m.jsxs)(u.default,{style:A.filterContainer,children:[(0,m.jsx)(u.default,{style:A.pickerContainer,children:(0,m.jsx)(D.Picker,{selectedValue:_,onValueChange:function(e){return H(e)},style:A.picker,children:["All"].concat(ae).map((function(e,t){return(0,m.jsx)(D.Picker.Item,{label:e,value:e},t)}))})}),(0,m.jsx)(I.default,{label:"Search Orders",value:V,onChangeText:U,style:A.searchInput}),(0,m.jsx)(R.default,{onPress:function(){U("")},textColor:"#007BFF",children:"Clear"})]}),Q?(0,m.jsx)(p.default,{size:"large",color:"#007BFF",style:A.loader}):(0,m.jsx)(P.default,{data:d,renderItem:function(e){var t=e.item;return(0,m.jsxs)(O.default,{style:A.card,children:[(0,m.jsxs)(O.default.Content,{children:[(0,m.jsxs)(F.default,{children:["Order ID: ",t._id]}),(0,m.jsxs)(u.default,{style:A.detailsContainer,children:[(0,m.jsxs)(u.default,{style:A.detailRow,children:[(0,m.jsx)(c.default,{style:A.detailLabel,children:"Customer:"}),(0,m.jsx)(c.default,{style:A.detailValue,children:t.name})]}),(0,m.jsxs)(u.default,{style:A.detailRow,children:[(0,m.jsx)(c.default,{style:A.detailLabel,children:"Total Price:"}),(0,m.jsxs)(c.default,{style:A.detailValue,children:["\u20b9",t.totalPrice.toFixed(2)]})]}),(0,m.jsxs)(u.default,{style:A.detailRow,children:[(0,m.jsx)(c.default,{style:A.detailLabel,children:"Phone:"}),(0,m.jsx)(c.default,{style:A.detailValue,children:t.phone})]}),(0,m.jsxs)(u.default,{style:A.detailRow,children:[(0,m.jsx)(c.default,{style:A.detailLabel,children:"Status:"}),(0,m.jsx)(c.default,{style:A.detailValue,children:t.status})]}),(0,m.jsxs)(u.default,{style:A.detailRow,children:[(0,m.jsx)(c.default,{style:A.detailLabel,children:"Payment Mode:"}),(0,m.jsx)(c.default,{style:A.detailValue,children:t.paymentMode})]})]})]}),(0,m.jsxs)(O.default.Actions,{style:A.cardActions,children:[(0,m.jsx)(R.default,{onPress:function(){return e=t,x(!0),void S(e);var e},buttonColor:"#007BFF",textColor:"white",children:"Edit"}),(0,m.jsx)(R.default,{onPress:function(){return ne(t._id)},buttonColor:"red",children:"Delete"})]})]})},keyExtractor:function(e){return e._id},contentContainerStyle:A.flatListContent,refreshControl:(0,m.jsx)(k.default,{refreshing:J,onRefresh:function(){Z()},colors:["#007BFF"],progressBackgroundColor:"#fff"}),ListEmptyComponent:function(){return(0,m.jsx)(u.default,{style:A.emptyListContainer,children:(0,m.jsx)(c.default,{style:A.emptyListText,children:"No data available."})})}}),(0,m.jsx)(L.default,{children:(0,m.jsx)(z.default,{visible:y,onDismiss:te,children:(0,m.jsxs)(O.default,{style:A.modalCard,children:[(0,m.jsx)(O.default.Title,{title:"Status"}),(0,m.jsx)(O.default.Content,{style:A.modalCardContent,children:(0,m.jsx)(E.default.Group,{onValueChange:function(e){return S(W(W({},C),{},{status:e}))},value:C.status,children:ae.map((function(e){return(0,m.jsxs)(u.default,{style:A.radioButtonContainer,children:[(0,m.jsx)(E.default,{color:"#007BFF",value:e}),(0,m.jsx)(c.default,{children:e})]},e)}))})}),(0,m.jsxs)(O.default.Actions,{style:A.modalCardActions,children:[(0,m.jsx)(R.default,{onPress:te,textColor:"black",children:"Cancel"}),(0,m.jsx)(R.default,{onPress:re,buttonColor:"#007BFF",disabled:Q,children:Q?"Saving...":"Save"})]})]})})})]})};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,B.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={name:"",description:"",price:0,quantity:0},H=h.default.create({container:{flex:1,padding:10,backgroundColor:"#f9f9f9"},searchContainer:{flexDirection:"row",alignItems:"center",marginBottom:10},searchInput:{flex:1,height:40,borderWidth:1,borderColor:"#ccc",borderRadius:8,paddingHorizontal:10},clearButton:{padding:8},listContainer:{paddingBottom:20},productCard:{marginVertical:5,marginHorizontal:10,padding:15},productName:{fontSize:18,fontWeight:"bold"},productDescription:{fontSize:14,color:"#888",marginTop:5},modalContainer:{backgroundColor:"white",padding:20,borderRadius:8},modalContent:{paddingHorizontal:10},input:{marginBottom:10,backgroundColor:"#f0f0f0",borderRadius:8,borderWidth:1,borderColor:"#ccc"},saveButton:{marginTop:10,backgroundColor:"#007BFF",borderRadius:8},closeButton:{marginTop:10,backgroundColor:"white",borderRadius:8,borderWidth:1,borderColor:"black"},editButton:{backgroundColor:"#007BFF",paddingVertical:6,paddingHorizontal:12,borderRadius:4,marginRight:8},editButtonText:{color:"#fff",fontSize:14,fontWeight:"bold"},deleteButton:{backgroundColor:"red",paddingVertical:6,paddingHorizontal:12,borderRadius:4},deleteButtonText:{color:"#fff",fontSize:14,fontWeight:"bold"},productActions:{borderTopWidth:1,borderTopColor:"#eee",marginTop:12,paddingTop:8},buttonsContainer:{flexDirection:"row",justifyContent:"flex-end"},addButton:{backgroundColor:"#007BFF",marginVertical:10,borderRadius:8},loader:{position:"absolute",top:"50%",left:"50%",transform:[{translateX:-25},{translateY:-25}],zIndex:1},emptyListContainer:{flex:1,justifyContent:"center",alignItems:"center",padding:20},emptyListText:{fontSize:18,color:"#888"}});const q=function(){var e=(0,o.useState)([]),t=(0,n.default)(e,2),r=t[0],a=t[1],i=(0,o.useState)([]),d=(0,n.default)(i,2),h=d[0],x=d[1],j=(0,o.useState)(!1),b=(0,n.default)(j,2),C=b[0],S=b[1],w=(0,o.useState)(_),B=(0,n.default)(w,2),T=B[0],k=B[1],F=(0,o.useState)(""),E=(0,n.default)(F,2),D=E[0],V=E[1],W=(0,o.useState)(!1),A=(0,n.default)(W,2),U=A[0],M=A[1],q=(0,o.useState)(!1),$=(0,n.default)(q,2),Q=$[0],X=$[1],Y=(0,o.useState)(!1),G=(0,n.default)(Y,2),J=G[0],K=G[1],Z=(0,o.useState)(null),ee=(0,n.default)(Z,2),te=ee[0],re=ee[1];(0,o.useEffect)((function(){ne()}),[]),(0,o.useEffect)((function(){if(""===D.trim())x(r);else{var e=r.filter((function(e){return e.name.toLowerCase().includes(D.toLowerCase())}));x(e)}}),[D,r]);var ne=function(){var e=(0,s.default)((function*(){try{var e=yield v.get("/products");a(e.data),x(e.data)}catch(t){console.error("Error fetching products:",t)}}));return function(){return e.apply(this,arguments)}}(),oe=function(){k(_),S(!1)},ae=function(){var e=(0,s.default)((function*(e){try{yield v.delete(`/products/${e}`),ne()}catch(t){console.error("Error deleting product:",t)}}));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=(0,s.default)((function*(){X(!0);try{yield ne()}catch(e){console.error("Error fetching products:",e)}finally{X(!1)}}));return function(){return e.apply(this,arguments)}}(),le=function(){var e=(0,s.default)((function*(){var e={description:T.description,imageUrl:T.imageUrl,name:T.name,price:T.price,quantity:T.quantity};try{X(!0),U?yield v.put(`/products/${T._id}`,e):yield v.post("/products",e),ne(),S(!1),M(!1)}catch(t){console.error("Error saving product:",t)}finally{X(!1)}}));return function(){return e.apply(this,arguments)}}(),de=function(){K(!1),re(null)},se=function(){var e=(0,s.default)((function*(){if(de(),te)try{X(!0),yield ae(te)}catch(e){console.error("Error deleting product:",e)}finally{X(!1)}}));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(l.default,{children:(0,m.jsxs)(u.default,{style:H.container,children:[(0,m.jsxs)(u.default,{style:H.searchContainer,children:[(0,m.jsx)(f.default,{style:H.searchInput,placeholder:"Search products...",value:D,onChangeText:V}),""!==D&&(0,m.jsx)(g.default,{style:H.clearButton,onPress:function(){V("")},children:(0,m.jsx)(y.default,{name:"close-circle-outline",size:20,color:"#888"})})]}),Q?(0,m.jsx)(p.default,{size:"large",color:"#007BFF",style:H.loader}):(0,m.jsx)(P.default,{data:h,renderItem:function(e){var t=e.item;return(0,m.jsxs)(O.default,{style:H.productCard,children:[(0,m.jsx)(O.default.Cover,{source:{uri:t.imageUrl},style:H.productImage}),(0,m.jsxs)(O.default.Content,{children:[(0,m.jsx)(c.default,{style:H.productName,children:t.name}),(0,m.jsx)(c.default,{style:H.productDescription,children:t.description})]}),(0,m.jsx)(O.default.Actions,{style:H.productActions,children:(0,m.jsxs)(u.default,{style:H.buttonsContainer,children:[(0,m.jsx)(g.default,{style:H.editButton,onPress:function(){return k(t),M(!0),void S(!0)},children:(0,m.jsx)(c.default,{style:H.editButtonText,children:"Edit"})}),(0,m.jsx)(g.default,{style:H.deleteButton,onPress:function(){return e=t._id,K(!0),void re(e);var e},children:(0,m.jsx)(c.default,{style:H.deleteButtonText,children:"Delete"})})]})})]})},keyExtractor:function(e){return e._id},contentContainerStyle:H.listContainer,refreshing:Q,onRefresh:ie,ListEmptyComponent:function(){return(0,m.jsx)(u.default,{style:H.emptyListContainer,children:(0,m.jsx)(c.default,{style:H.emptyListText,children:"No data available."})})}}),(0,m.jsx)(R.default,{mode:"contained",onPress:function(){k(_),M(!1),S(!0)},style:H.addButton,children:"Add Product"}),(0,m.jsx)(L.default,{children:(0,m.jsx)(z.default,{visible:J,onDismiss:de,contentContainerStyle:H.modalContainer,children:(0,m.jsxs)(u.default,{style:H.modalContent,children:[(0,m.jsx)(c.default,{style:H.deleteAlertText,children:"Are you sure you want to delete this product?"}),(0,m.jsxs)(u.default,{style:H.modalFoter,children:[(0,m.jsx)(R.default,{mode:"contained",onPress:de,style:H.cancelButton,children:"Cancel"}),(0,m.jsx)(R.default,{mode:"contained",onPress:se,style:H.deleteButton,children:"Done"})]})]})})}),(0,m.jsx)(L.default,{children:(0,m.jsx)(z.default,{visible:C,onDismiss:oe,contentContainerStyle:H.modalContainer,children:(0,m.jsxs)(u.default,{style:H.modalContent,children:[(0,m.jsx)(I.default,{label:"Product Image URL",placeholder:"Enter Product Image URL",value:T.imageUrl,onChangeText:function(e){return k(N(N({},T),{},{imageUrl:e}))},style:H.input}),(0,m.jsx)(I.default,{label:"Product Name",placeholder:"Enter Product Name",value:T.name,onChangeText:function(e){return k(N(N({},T),{},{name:e}))},style:H.input}),(0,m.jsx)(I.default,{label:"Product Description",placeholder:"Enter Product Description",value:T.description,onChangeText:function(e){return k(N(N({},T),{},{description:e}))},style:H.input,multiline:!0}),(0,m.jsx)(I.default,{label:"Product Price",placeholder:"Enter Product Price",value:0===T.price||isNaN(T.price)?"":T.price.toString(),onChangeText:function(e){return k(N(N({},T),{},{price:parseFloat(e)}))},style:H.input,keyboardType:"numeric"}),(0,m.jsx)(I.default,{label:"Product Quantity",placeholder:"Enter Product Quantity",value:0===T.quantity||isNaN(T.quantity)?"":T.quantity.toString(),onChangeText:function(e){return k(N(N({},T),{},{quantity:parseFloat(e)}))},style:H.input,keyboardType:"numeric"}),(0,m.jsxs)(u.default,{style:H.modalFoter,children:[(0,m.jsx)(R.default,{mode:"contained",onPress:oe,textColor:"black",style:H.closeButton,children:"Close"}),(0,m.jsx)(R.default,{mode:"contained",onPress:le,style:H.saveButton,children:"Save"})]}),Q&&(0,m.jsx)(p.default,{size:"large",color:"#007BFF",style:H.loader})]})})})]})})};var $=h.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",padding:20,backgroundColor:"#f9f9f9"},heading:{fontSize:24,fontWeight:"bold",marginBottom:20,color:"#007BFF"},input:{width:"100%",height:40,borderWidth:1,borderColor:"#ccc",borderRadius:8,paddingHorizontal:10,marginBottom:20},registerButton:{backgroundColor:"#007BFF",paddingVertical:12,paddingHorizontal:24,borderRadius:8},registerButtonText:{color:"#fff",fontSize:18,fontWeight:"bold",textAlign:"center"},loginLink:{marginTop:10},loginLinkText:{color:"#007BFF",fontSize:16,fontWeight:"bold"}});const Q=function(e){var t=e.navigation,r=(0,o.useState)(""),a=(0,n.default)(r,2),i=a[0],l=a[1],d=(0,o.useState)(""),h=(0,n.default)(d,2),p=h[0],x=h[1],j=(0,o.useState)(""),b=(0,n.default)(j,2),C=b[0],S=b[1],w=function(){var e=(0,s.default)((function*(){try{yield v.post("/admin/register",{email:i,password:p}).then((function(e){e&&t.navigate("Login")}))}catch(e){console.error("Error registering:",e),alert("Failed to register. Please check your details and try again.")}}));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)(u.default,{style:$.container,children:[(0,m.jsx)(y.default,{name:"account-circle",size:100,color:"#007BFF"}),(0,m.jsx)(c.default,{style:$.heading,children:"Admin Registration"}),(0,m.jsx)(f.default,{style:$.input,placeholder:"Email",value:i,onChangeText:l,autoCapitalize:"none"}),(0,m.jsx)(f.default,{style:$.input,placeholder:"Password",value:p,onChangeText:x,secureTextEntry:!0}),(0,m.jsx)(f.default,{style:$.input,placeholder:"Confirm Password",value:C,onChangeText:S,secureTextEntry:!0}),(0,m.jsx)(g.default,{style:$.registerButton,onPress:w,children:(0,m.jsx)(c.default,{style:$.registerButtonText,children:"Register"})})]})};var X=r(2982),Y=r(3499),G=r(5127),J=r(4680),K=r.n(J);function Z(){var e=(0,o.useState)([]),t=(0,n.default)(e,2),r=t[0],a=t[1],i=(0,o.useState)(!1),l=(0,n.default)(i,2),d=l[0],f=l[1],g=(0,o.useState)([]),h=(0,n.default)(g,2),p=h[0],y=h[1],x=(0,o.useState)(-1),j=(0,n.default)(x,2),b=j[0],C=j[1],v=function(){var e=(0,s.default)((function*(){f(!0);try{var e=yield fetch("https://odicult.fruitnasta.com/api/user/getAllUsers"),t=yield e.json();a(t)}catch(r){console.error(r)}finally{f(!1)}}));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){v()}),[]);return(0,m.jsxs)(u.default,{style:ee.container,children:[(0,m.jsxs)(c.default,{style:ee.userCount,children:["User Count: ",r.length]}),(0,m.jsxs)(u.default,{style:ee.sliderContainer,children:[(0,m.jsx)(K(),{style:ee.slider,minimumValue:-1,maximumValue:4,step:1,value:b,onValueChange:function(e){C(e)}}),(0,m.jsxs)(c.default,{style:ee.sliderValue,children:["Filter by Coins: ",-1===b?"All":4===b?"More than 3":b]})]}),(0,m.jsx)(Y.default,{style:ee.scrollView,contentContainerStyle:ee.scrollViewContent,refreshControl:(0,m.jsx)(k.default,{refreshing:d,onRefresh:v}),children:r.filter((function(e){return-1===b||(4===b?e.coins>3:e.coins===b)})).map((function(e,t){return(0,m.jsxs)(u.default,{style:ee.userCard,children:[(0,m.jsxs)(c.default,{onPress:function(){return function(e){y(p.includes(e)?p.filter((function(t){return t!==e})):[].concat((0,X.default)(p),[e]))}(t)},style:ee.cardTitle,children:[e.name||"User"," "]}),(0,m.jsx)(G.default,{collapsed:!p.includes(t),children:Object.keys(e).map((function(t,r){if("name"!==t)return(0,m.jsx)(c.default,{style:ee.userDetail,children:`${t.charAt(0).toUpperCase()+t.slice(1)}: ${e[t]}`},r)}))})]},t)}))})]})}var ee={userCard:{margin:10,padding:20,backgroundColor:"white",borderRadius:10,elevation:3,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:2,width:"90%",alignSelf:"center"},userDetail:{fontSize:16,marginVertical:4,color:"#333"},userCount:{fontSize:18,fontWeight:"bold",margin:10,color:"#444"},container:{flex:1,alignItems:"center",justifyContent:"flex-start",paddingTop:20},scrollView:{width:"100%"},scrollViewContent:{alignItems:"center",paddingBottom:20},cardTitle:{fontSize:20,fontWeight:"bold",marginBottom:10,color:"#007bff"},sliderContainer:{alignItems:"center",justifyContent:"center",width:"100%",padding:20},slider:{width:"80%",height:40},sliderValue:{fontSize:16,marginTop:10,color:"#000"}},te=r(2484),re=h.default.create({container:{flex:1,alignItems:"center",justifyContent:"center"},card:{backgroundColor:"#e0e0e0",padding:20,marginVertical:10,width:"80%",alignItems:"center"},text:{fontSize:18},logoutButton:{marginTop:20,backgroundColor:"#ff4444",color:"white",padding:10,borderRadius:10,width:"80%",alignSelf:"center"}});const ne=function(e){var t=e.navigation,r=(0,o.useContext)(C).logout,n=function(){var e=(0,s.default)((function*(){try{r(),t.navigate("Login")}catch(e){console.error("Error clearing user credentials",e)}}));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)(u.default,{style:re.container,children:[[{name:"Manage Product",route:"Manage Product"},{name:"Manage Orders",route:"Manage Orders"},{name:"Manage User",route:"Manage User"},{name:"Table View User",route:"View User"},{name:"Register User",route:"Register User"}].map((function(e,r){return(0,m.jsx)(g.default,{style:re.card,onPress:function(){return t.navigate(e.route)},children:(0,m.jsx)(c.default,{style:re.text,children:e.name})},r)})),(0,m.jsx)(te.default,{title:"Logout",onPress:n,style:re.logoutButton})]})};var oe=r(3303),ae=r(6112),ie=["name","coins","tenantType","gender","phoneNumber","email","firebaseId","subscriptionStartDate","rentPosts"],le=oe.default.get("window").height,de=oe.default.get("window").width,se=h.default.create({container:{flex:1,padding:10,backgroundColor:"#f9f9f9"},headerRow:{flexDirection:"row",borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#f0f0f0"},headerCell:{padding:10,minWidth:100,alignItems:"center",justifyContent:"center"},headerText:{fontWeight:"bold"},row:{flexDirection:"row",borderBottomWidth:1,borderBottomColor:"#eee"},cell:{minWidth:100,maxWidth:150,padding:10},cellText:{fontSize:12},header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:10},headerIcon:{padding:10},iconContainer:{flexDirection:"row",justifyContent:"flex-end",padding:10},headerIcon:{marginLeft:10},headerIcon:{marginLeft:10},scrollViewContainer:{height:le,widht:de}});const ue=function(){var e=(0,o.useState)([]),t=(0,n.default)(e,2),r=t[0],a=t[1],i=(0,o.useState)(!1),l=(0,n.default)(i,2),d=l[0],f=l[1],h=(0,o.useState)({key:null,direction:null}),x=(0,n.default)(h,2),j=x[0],b=x[1];(0,o.useEffect)((function(){C()}),[]);var C=function(){var e=(0,s.default)((function*(){f(!0);try{var e=yield fetch("https://odicult.fruitnasta.com/api/user/getAllUsers"),t=(yield e.json()).map((function(e){var t={};return ie.forEach((function(r){t[r]=e[r]||"NA"})),Object.keys(e).forEach((function(r){ie.includes(r)||(t[r]=e[r])})),t}));a(t.reverse())}catch(r){console.error("Error fetching users:",r)}finally{f(!1)}}));return function(){return e.apply(this,arguments)}}(),v=function(e){var t=e.item,r=function(e,t){return"subscriptionStartDate"===e&&t?function(e){var t=1e3*parseFloat(e);return new Date(t).toLocaleDateString("en-US")}(t):void 0!==t&&null!==t?t.toString():"NA"};return(0,m.jsx)(u.default,{style:se.row,children:ie.map((function(e,n){return(0,m.jsx)(g.default,{onPress:function(){return n=r(e,t[e]),ae.default.setString(n),void alert("Copied to clipboard");var n},children:(0,m.jsx)(c.default,{style:se.cell,children:r(e,t[e])})},n)}))})};return(0,m.jsx)(u.default,{style:se.container,children:d?(0,m.jsx)(p.default,{size:"large",color:"#007BFF"}):(0,m.jsxs)(u.default,{style:se.tableContainer,children:[(0,m.jsxs)(u.default,{style:se.iconContainer,children:[(0,m.jsx)(g.default,{onPress:function(){a((0,X.default)(r).reverse())},style:se.headerIcon,children:(0,m.jsx)(y.default,{name:"sort-reverse-variant",size:24,color:"black"})}),(0,m.jsx)(g.default,{onPress:function(){C()},style:se.headerIcon,children:(0,m.jsx)(y.default,{name:"refresh",size:24,color:"black"})})]}),(0,m.jsx)(Y.default,{horizontal:!0,children:(0,m.jsxs)(u.default,{children:[(0,m.jsx)((function(){return(0,m.jsx)(u.default,{style:se.headerRow,children:ie.map((function(e,t){return(0,m.jsx)(g.default,{style:se.headerCell,onPress:function(){return function(e){j.key===e&&"ascending"===j.direction?b({key:e,direction:"descending"}):b({key:e,direction:"ascending"});var t=(0,X.default)(r);t.sort((function(t,r){return t[e]<r[e]?"ascending"===j.direction?-1:1:t[e]>r[e]?"ascending"===j.direction?1:-1:0})),a(t)}(e)},children:(0,m.jsx)(c.default,{style:se.headerText,children:e.toUpperCase()})},t)}))})}),{}),(0,m.jsx)(Y.default,{style:se.scrollViewContainer,nestedScrollEnabled:!0,children:r.map((function(e,t){return(0,m.jsx)(v,{item:e},t)}))})]})})]})})};var ce=(0,i.default)();const fe=function(){return(0,m.jsxs)(ce.Navigator,{initialRouteName:"Menu",children:[(0,m.jsx)(ce.Screen,{name:"Menu",component:ne,options:{title:"Menu"}}),(0,m.jsx)(ce.Screen,{name:"Manage User",component:Z,options:{title:"Manage User"}}),(0,m.jsx)(ce.Screen,{name:"View User",component:ue,options:{title:"All Users"}}),(0,m.jsx)(ce.Screen,{name:"Manage Product",component:q,options:{title:"Manage Product"}}),(0,m.jsx)(ce.Screen,{name:"Manage Orders",component:U,options:{title:"Manage Orders"}}),(0,m.jsx)(ce.Screen,{name:"Register User",component:Q,options:{title:"Register User"}})]})};h.default.create({container:{flex:1,padding:10,backgroundColor:"#f9f9f9"},flatListContent:{paddingBottom:20},card:{marginVertical:5,marginHorizontal:10,padding:15,borderRadius:8,elevation:3,backgroundColor:"#fff"},cardTitle:{fontSize:18,fontWeight:"bold"},cardText:{fontSize:16,marginTop:5},cardActions:{borderTopWidth:1,borderTopColor:"#eee",marginTop:12,paddingTop:8,justifyContent:"flex-end"},editButton:{backgroundColor:"#007BFF",paddingVertical:6,paddingHorizontal:12,borderRadius:4,marginRight:8},deleteButton:{backgroundColor:"red",paddingVertical:6,paddingHorizontal:12,borderRadius:4},modalContainer:{backgroundColor:"white",padding:20,borderRadius:8},modalContent:{paddingHorizontal:10},modalTitle:{fontSize:20,fontWeight:"bold",marginBottom:10},input:{marginBottom:10,backgroundColor:"#f0f0f0",borderRadius:8,borderWidth:1,borderColor:"#ccc"},modalFoter:{flexDirection:"row",justifyContent:"flex-end",marginTop:20},cancelButton:{marginRight:10,backgroundColor:"white",borderWidth:1,borderColor:"#ccc"},saveButton:{backgroundColor:"#007BFF",borderRadius:8},searchContainer:{flexDirection:"row",alignItems:"center",marginBottom:10},searchInput:{flex:1,height:40,borderWidth:1,borderColor:"#ccc",borderRadius:8,paddingHorizontal:10},clearButton:{padding:8},loader:{position:"absolute",top:"50%",left:"50%",transform:[{translateX:-25},{translateY:-25}],zIndex:1}});var ge=(0,i.default)(),he=function(){var e=(0,o.useState)(!1),t=(0,n.default)(e,2),r=t[0],i=(t[1],(0,o.useContext)(C).userId);return r?(0,m.jsx)(u.default,{children:(0,m.jsx)(d.default,{visible:r,textContent:"Loading...",textStyle:{color:"#FFF"}})}):(0,m.jsx)(a.default,{children:i?(0,m.jsx)(ge.Navigator,{initialRouteName:"HomeScreen",children:(0,m.jsx)(ge.Screen,{name:"HomeScreen",component:fe})}):(0,m.jsxs)(ge.Navigator,{initialRouteName:"Login",children:[(0,m.jsx)(ge.Screen,{name:"Login",component:w}),(0,m.jsx)(ge.Screen,{name:"Register",component:Q})]})})};const pe=function(){return(0,m.jsx)(l.default,{children:(0,m.jsx)(b,{children:(0,m.jsx)(he,{})})})}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],l=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,r.d(a,i),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,d]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(d)var u=d(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[618],(()=>r(2807)));n=r.O(n)})();
//# sourceMappingURL=main.b60aace3.js.map