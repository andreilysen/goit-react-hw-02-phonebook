(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(17),n(10)),i=n(12),u=n(4),l=n(5),m=n(7),j=n(6),b=n(21),d=n(3),h=n(2),p=n.n(h),f=n(0),O=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChangeInput=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t.resetInput=function(){t.setState({name:"",number:""})},t.handleAddContact=function(e){e.preventDefault(),t.props.onAddContacts(t.state),t.resetInput()},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{className:p.a.form,onSubmit:this.handleAddContact,children:Object(f.jsxs)("label",{className:p.a.item,children:[Object(f.jsx)("p",{children:"name"}),Object(f.jsx)("input",{className:p.a.input,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChangeInput}),Object(f.jsx)("p",{children:"Number"}),Object(f.jsx)("input",{className:p.a.input,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChangeInput}),Object(f.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),C=function(t){var e=t.value,n=t.changeFilter;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{children:"Find contacts by name"}),Object(f.jsx)("input",{className:p.a.input,type:"text",name:"filter",value:e,onChange:n})]})},v=n(8),x=n.n(v),g=function(t){var e=t.name,n=t.number,a=t.onClickRemove;return Object(f.jsxs)("li",{className:x.a.items,children:[Object(f.jsxs)("p",{className:x.a.item,children:[e,":"]}),Object(f.jsx)("p",{className:x.a.item,children:n}),Object(f.jsx)("button",{onClick:a,children:"Delete"})]})},_=function(t){var e=t.contacts,n=t.onRemoveContact;return e.length>0&&Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsx)(g,{name:a,number:c,onClickRemove:function(){return n(e)}},e)}))})},A=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.AddContact=function(e){var n=t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));n?alert("".concat(n.name,"  is already in contacts!")):t.setState((function(t){return{contacts:[Object(s.a)(Object(s.a)({},e),{},{id:Object(b.a)()})].concat(Object(i.a)(t.contacts))}}))},t.ChangeFilter=function(e){console.log(e),t.setState({filter:e.target.value})},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(O,{onAddContacts:this.AddContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(C,{value:this.state.filter,changeFilter:this.ChangeFilter}),Object(f.jsx)(_,{contacts:e,onRemoveContact:this.removeContact})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"Form_form__1tWAy",item:"Form_item__2-R5p",button:"Form_button__3AFMM",input:"Form_input__1DXlf"}},8:function(t,e,n){t.exports={items:"Contact_items__1as6G",item:"Contact_item__28d4L"}}},[[19,1,2]]]);
//# sourceMappingURL=main.484b0d9d.chunk.js.map