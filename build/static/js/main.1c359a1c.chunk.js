(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={phonebook:"App_phonebook__2Aozt",pageTitle:"App_pageTitle__3g2-r",title:"App_title__DknOx"}},11:function(t,e,n){t.exports={contactList:"ContactList_contactList__2LHZR",contact:"ContactList_contact__1_4UY",btn:"ContactList_btn__2Ukqy"}},13:function(t,e,n){t.exports={label:"Filter_label__1zkGn",input:"Filter_input__1Px9Z"}},2:function(t,e,n){t.exports={form:"ContactsForm_form__1HVIi",label:"ContactsForm_label__1IL5w",input:"ContactsForm_input__1Y-EL",btn:"ContactsForm_btn__1Y99m"}},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(14),r=n.n(o),i=(n(21),n(16)),s=n(3),l=n(6),u=n(7),b=n(9),m=n(8),d=n(15),h=n.n(d),j=n(10),p=n.n(j),f=n(5),_=n(2),O=n.n(_),C=n(0),x={name:"",number:"",filter:""},v=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=Object(s.a)({},x),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.setState(Object(s.a)({},x)),t.props.onSubmit(t.state)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,className:O.a.form,children:[Object(C.jsxs)("label",{className:O.a.label,children:["Name",Object(C.jsx)("input",{className:O.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(C.jsxs)("label",{className:O.a.label,children:["Number",Object(C.jsx)("input",{className:O.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(C.jsx)("button",{className:O.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=v,N=n(13),y=n.n(N),A=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(C.jsx)("input",{className:y.a.input,type:"text",name:"filter",value:e,onChange:n})]})},k=n(11),S=n.n(k),L=function(t){var e=t.list,n=t.onDelete;return Object(C.jsx)("ul",{className:S.a.contactList,children:e.map((function(t){return Object(C.jsxs)("li",{className:S.a.contact,children:[Object(C.jsxs)("span",{children:[t.name,":"]}),Object(C.jsx)("span",{children:t.number}),Object(C.jsx)("button",{className:S.a.btn,type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})},w=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onAddContact=function(e){var n=Object(s.a)({id:h.a.generate()},e);t.state.contacts.find((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(i.a)(e))}}))},t.onChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(C.jsxs)("div",{className:p.a.phonebook,children:[Object(C.jsx)("h1",{className:p.a.pageTitle,children:"Phonebook"}),Object(C.jsx)(g,{onSubmit:this.onAddContact}),Object(C.jsx)("h2",{className:p.a.title,children:"Contacts"}),e.length>1&&Object(C.jsx)(A,{value:n,onChange:this.onChangeFilter}),Object(C.jsx)(L,{list:c,onDelete:this.onDeleteContact})]})}}]),n}(a.Component),F=w;r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(F,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1c359a1c.chunk.js.map