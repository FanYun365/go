function DataGrid(){this._ops={id:"",obj:null,data:null,head:null,list:null,toolBar:null,styles:null,paging:{num:8,page:1},edit:!0,click:null,fixed:!1,bdCollapse:!0,headpadding:"0px",checkIndex:0,max:32,cleanTip:"",hasID:!1,hasHead:!0,hasSelBox:!0,spBlank:!1,spAutoEdit:!1,sortFunc:null,sortType:"down",sortName:""};this._table=null;this._list={id:"",obj:""};this._set={IDWidth:"50px",editWidth:"92px",headClassName:"dataGrid_header_tr"};this._event={editTr:-1,sortName:"",sortable:!1,state:"default"};
this._state={isBlank:!1,colNum:0,headCells:[{width:0}],headWidth:0};this._types={str:"",ip:"0.0.0.0",mask:"0.0.0.0",dns:"0.0.0.0",gateway:"0.0.0.0",mac:"00-00-00-00-00-00"};this._pgList={id:"",obj:"",num:5,page:1,listMarginLeft:19,macAddrIdPre:"macAddr",ipAddrIdPre:"ipAddr",selectPre:"selConGrid",listDivStr:"listDiv",listArrowLStr:"listArrowL",listArrowRStr:"listArrowR",ListSpanClassName:"ListSpan",ListSpanSClassName:"listSpanS",plcClassName:"pageListContent"};this._toolBar={delSelBtn:null,clrSelBtn:null};
"function"!=typeof DataGrid.prototype.init&&(DataGrid.prototype.init=function(a){this._optionsInit(a);this._create()},DataGrid.prototype.getPageNum=function(){return this._pgList.page},DataGrid.prototype.getNumPerPage=function(){this._ops.paging.num},DataGrid.prototype.getDataLen=function(){return this._getListLen()},DataGrid.prototype.refresh=function(a){void 0==a&&(a=1);this._refresh(a)},DataGrid.prototype.setDataSource=function(a){a instanceof Array&&(this._ops.data=a)},DataGrid.prototype.getActiveTr=
function(){return this._getEditTr()},DataGrid.prototype.getActiveTrIndex=function(){return this._getTrIndex(this._getEditTr())},DataGrid.prototype._create=function(){this._getTableObj();null!=this._table&&(this._setToolBar(),this._tableSet(),this._headCreate(),this._contentCreate(this._ops.paging.page),this._flushBtn())},DataGrid.prototype._eventStateSet=function(a,b){if(!0!=b&&"default"!=this._event.state)return!1;this._event.state=a;return!0},DataGrid.prototype._eventStateGet=function(){return this._event.state},
DataGrid.prototype._getEditTr=function(){return this._event.editTr},DataGrid.prototype._setEditTr=function(a){this._event.editTr=a},DataGrid.prototype._getBlankDataObj=function(a){var b=this._ops.list,d;for(d in b)a[b[d].name]=""},DataGrid.prototype._fillEditRow_IP=function(a,b,d,c,e){var f=el("input");f.className="ipInput text";f.id=this._pgList.ipAddrIdPre+b+this._ops.id+d;f.style.textAlign="center";void 0!=c&&0!=c.length&&(f.value=c);f.maxLength=e.maxLength?e.maxLength:15;void 0!=e.size&&(f.size=
e.size);a.appendChild(f)},DataGrid.prototype._fillEditRow_IPs=function(a,b,d,c,e){e=e.name.split(" ");var f;f=createAddrDiv(this._pgList.ipAddrIdPre+"Div"+b+this._ops.id+d+e[0]);a.appendChild(f);genAddrInput(f.id,this._pgList.ipAddrIdPre+b+this._ops.id+d+e[0],ipStr,c[e[0]],smallAddrInputClassType);f=el("label");f.innerHTML="-";a.appendChild(f);setStyle(f,{cssFloat:"left",width:"5px",lineHeight:"18px",height:"10px",margin:"0px 0px 0px 1px"});f=createAddrDiv(this._pgList.ipAddrIdPre+"Div"+b+this._ops.id+
d+e[1]);a.appendChild(f);genAddrInput(f.id,this._pgList.ipAddrIdPre+b+this._ops.id+d+e[1],ipStr,c[e[1]],smallAddrInputClassType)},DataGrid.prototype._fillEditRow_MAC=function(a,b,d,c,e){var f=el("input");f.className="ipMac text";f.id=this._pgList.macAddrIdPre+b+this._ops.id+d;f.style.textAlign="center";void 0!=c&&0!=c.length&&(f.value=c.toUpperCase());f.maxLength=e.maxLength?e.maxLength:17;void 0!=e.size&&(f.size=e.size);a.appendChild(f)},DataGrid.prototype._fillEditRow_Select=function(a,b,d,c,e){var f=
el("div"),h=el("span"),g=el("span"),l=el("i");b=this._pgList.selectPre+b+this._ops.id+d;f.className="gridSelectCon "+e.className;a.appendChild(f);h.id=b;h.className="select";f.appendChild(h);g.className="value hsGridValue";h.appendChild(g);l.className="arrow";h.appendChild(l);a=parseInt(getNodeDefaultView(f,"width"))-l.offsetWidth-13-parseInt(getNodeDefaultView(h,"marginLeft"));g.style.width=a+"px";if(void 0==c||0==c.length)c=void 0==e.defaultValue?0:e.defaultValue;selectInit(b,e.options,c,e.func,
e.maxSelSize)},DataGrid.prototype._fillEditRow_Checkbox=function(a,b,d,c,e){b=el("input");b.type="checkbox";b.className="";a.appendChild(b);void 0!=c&&0!=c.length&&(b.checked=!0==c)},DataGrid.prototype._fillEditRow_Radio=function(a,b,d,c,e){b=el("input");b.type="radio";b.className="";a.appendChild(b);void 0!=c&&0!=c.length&&(b.checked=!0==c)},DataGrid.prototype._fillEdit_Ports=function(a,b,d,c,e){var f,h=e.name.split(" "),g=c[h[0]];"undefined"!=typeof g&&(f=c[h[1]]!=g?g+"-"+c[h[1]]:g);this._fillEditRow_Str(a,
b,d,f,e)},DataGrid.prototype._fillEditRow_Input=function(a,b,d,c){var e=el("input");e.className="text";e.style.textAlign="center";e.style.width=void 0==c?"":c+"px";a.appendChild(e);void 0!=b&&0!=b.length&&(e.value=b);void 0!=d.maxLength&&(e.maxLength=d.maxLength);void 0!=d.size&&(e.size=d.size);return e},DataGrid.prototype._fillEditRow_Str=function(a,b,d,c,e){b=parseInt(getNodeDefaultView(a,"paddingLeft"))+parseInt(getNodeDefaultView(a,"paddingRight"));this._fillEditRow_Input(a,c,e,a.offsetWidth-
b-40)},DataGrid.prototype._fillEditRow_Speed=function(a,b,d,c,e){b=el("label");var f=parseInt(getNodeDefaultView(a,"paddingLeft"))+parseInt(getNodeDefaultView(a,"paddingRight"));b.innerHTML=void 0==e.unit?" Kb/s":" "+e.unit;b.style.fontSize="10px";d=a.offsetWidth;c=this._fillEditRow_Input(a,c,e);a.appendChild(b);c.style.width=d-f-40-b.offsetWidth+"px"},DataGrid.prototype._fillEditRow_PopVig=function(a,b,d,c,e){var f,h=e.popObj;0==c.length?(c=el("input"),c.className="popVigBtn",c.value=btn.config,
c.type="button",c.onclick=function(){e.click(b)},a.appendChild(c)):(f=el("span"),f.className="dataGridPopVigDes",h=h.subList[c][h.name],f.title=h,d=this._calcShowSize(d,e),h=getStrInMax(h,d),f.innerHTML=htmlEscape(h),f.onclick=function(){e.click(b)},a.appendChild(f),a.setAttribute(e.popObj.indexDes,c))},DataGrid.prototype._fillEditRow_EditBtns=function(a,b,d){a=document.createElement("input");d=document.createElement("input");var c=this._ops.toolBar;d.className="cancel";d.type="button";d.value=btn.cancel;
this._toolCancelHandle(d);a.className="edit";a.type="button";a.value=btn.saveTbl;this._toolSaveHandle(a,c.save,c.asyn);b.appendChild(d);b.appendChild(a)},DataGrid.prototype._fillEditRow=function(a,b,d){var c=this._ops.list,e,f,h,g,l,k=this;this._setEditTr(a);!0==this._ops.hasSelBox&&(g=a.insertCell(-1),l=document.createElement("input"),l.type="checkbox",l.onclick=function(){k._singelSelHandle(l,k)},g.appendChild(l),!1==this._ops.hasHead&&setStyle(g,{width:this._set.IDWidth}));!0==this._ops.hasID&&
(g=a.insertCell(-1),g.innerHTML=this._getListLen()-b);for(var m in c)if(g=a.insertCell(-1),e=c[m],h=e.type,f=d[e.name],!1==e.edit)g.innerHTML=f?f:"";else switch(h){case "btn":break;case "mask":case "dns":case "gateway":case "ip":this._fillEditRow_IP(g,b,m,f,e);break;case "mac":this._fillEditRow_MAC(g,b,m,f,e);break;case "select":this._fillEditRow_Select(g,b,m,f,e);break;case "checkbox":this._fillEditRow_Checkbox(g,b,m,f,e);break;case "radio":this._fillEditRow_Radio(g,b,m,f,e);break;case "ports":this._fillEdit_Ports(g,
b,m,d,e);break;case "ips":this._fillEditRow_IPs(g,b,m,d,e);break;case "speed":this._fillEditRow_Speed(g,b,m,f,e);break;case "popVig":this._fillEditRow_PopVig(g,b,m,f,e);break;default:this._fillEditRow_Str(g,b,m,f,e)}!0==this._ops.edit&&(g=a.insertCell(-1),this._fillEditRow_EditBtns(d,g,b),!1==this._ops.hasHead&&setStyle(g,{width:this._set.editWidth}))},DataGrid.prototype._getTrIndexInDataObj=function(a){a=this._getTrIndex(a);var b=this._getDRL()-1;if(-1==a)return a;a=!0==this._ops.hasHead?a-1:a;return b-
a},DataGrid.prototype._resetID=function(){var a=this._table.rows,b=a.length,d=0,c=0,e=this._eventStateGet();if(!1!=this._ops.hasID){d=!0==this._ops.hasSelBox?1:0;!0==this._ops.hasHead&&(c++,b--);"add"==e&&(c++,b--);for(var f=0;f<b;f++)e=a[f+c].cells[d],void 0!=e&&(e.innerHTML=f+1)}},DataGrid.prototype._getDRL=function(){return!0==this._ops.hasHead?this._table.rows.length-1:this._table.rows.length},DataGrid.prototype._flushBtn=function(){var a=this._getDRL(),b;b=this._toolBar.addBtn;null!=b&&(b.className=
this._ops.max==a?"addUn":"add");b=this._toolBar.delAllBtn;null!=b&&(b.className=0<a?"delAll":"delAllUn")},DataGrid.prototype._blankData=function(a){a=this._ops.data[a];var b,d;for(d in a)b=a[d],b instanceof Array?a[d].splice(0,b.length):a[d]=""},DataGrid.prototype._toolAddHandle=function(a,b,d){var c=this;a.onclick=function(){function a(b){!1!=b&&(!0==c._ops.hasSelBox&&(g.cells[0].innerHTML=""),!0==c._ops.hasID&&(g.cells[1].innerHTML=""),c._disableEditBtns(),c._flushBtn(),c._pageList(h,1))}var f=
c._table,h,g,l={},k=0;!0==c._eventStateSet("add")&&(c._ops.max==c._getDRL()?c._event.state="default":(c._content_delete_blank(),!0==c._ops.hasHead&&(k=1),g=f.insertRow(k),f=c._getDRL()-1,h=f+1,g.id="dataGridAdd",g.setAttribute("dataGridLastIndex",f),c._getBlankDataObj(l),c._fillEditRow(g,k,l),void 0!=b?!0==d?b(a):a(b()):a(!0)))}},DataGrid.prototype._getDomChildNode=function(a,b,d){a=a.childNodes;var c=[],e=0,f;f=b.split(" ");b=f[0];for(var h=f[1],g=0,l=a.length;g<l;g++)f=a[g],f.tagName.toLowerCase()==
b&&(void 0!=h&&f.type==h?(c[e]=f,e++):void 0==h&&(c[e]=f,e++));return void 0!=d?c[d]:c[0]},DataGrid.prototype._toolSaveHandle_Edit=function(a,b,d,c){return this._toolSaveHandle_SaveData(a,b,d,c)},DataGrid.prototype._toolSaveHandle_SaveData=function(a,b,d,c){var e=this._ops.list,f,h,g,l,k,m,n,p=0,r=!1,q,s;for(s in e)if(f=e[s],h=f.type,l=f.name,k=this._pgList.ipAddrIdPre+d+this._ops.id+s,!0==this._ops.hasID&&p++,!0==this._ops.hasSelBox&&p++,!1!=f.edit){switch(h){case "ip":n=id(k);g=n.value;if(ENONE!=
(f=checkIp(g)))return{result:f,target:n};break;case "ips":m=l.split(" ");n=id(k+m[0]);if(ENONE!=(f=checkIp(n.value)))return{result:f,target:n};n=id(k+m[1]);if(ENONE!=(f=checkIp(n.value)))return{result:f,target:n};break;case "mask":n=id(k);g=n.value;if(ENONE!=(f=checkMask(g)))return{result:f,target:n};break;case "dns":n=id(k);g=n.value;if(ENONE!=(f=checkIp(g)))return{result:f,target:n};break;case "gateway":n=id(k);g=n.value;if(ENONE!=(f=checkIp(g)))return{result:f,target:n};break;case "mac":k=this._pgList.macAddrIdPre+
d+this._ops.id+s;n=id(k);g=n.value;if(ENONE!=(f=checkMac(g)))return{result:f,target:n};break;case "popVig":q=a.cells[p];g=this._getDomChildNode(q,"span");g=null==g?"":parseInt(q.getAttribute(f.popObj.indexDes));break;case "select":n=this._getDomChildNode(a.cells[p],"div");n=g=this._getDomChildNode(n,"span");g=g.value;break;case "checkbox":n=g=this._getDomChildNode(a.cells[p],"input checkbox");g=!0==g.checked?1:0;break;case "radio":n=g=this._getDomChildNode(a.cells[p],"input radio");g=!0==g.checked?
1:0;break;case "ports":n=g=this._getDomChildNode(a.cells[p],"input");g=g.value;break;default:n=g=this._getDomChildNode(a.cells[p],"input"),g=g.value}if("ports"==h)if(m=l.split(" "),void 0!=b[m[0]]&&(c[m[0]]=b[m[0]],c[m[1]]=b[m[1]]),k=g.split("-"),2==k.length){0!=k[0].length&&!1==/\D/g.test(k[0])?k[0]=parseInt(k[0]):k[0]="error";0!=k[1].length&&!1==/\D/g.test(k[1])?k[1]=parseInt(k[1]):k[1]="error";if(k[0]!=b[m[0]]||k[1]!=b[m[1]])r=!0;b[m[0]]=k[0]>k[1]?k[1]:k[0];b[m[1]]=k[0]>k[1]?k[0]:k[1]}else if(1==
k.length){k=k[0];0!=k.length&&!1==/\D/g.test(k)&&(k=parseInt(k));if(k!=b[m[0]]||k!=b[m[1]])r=!0;b[m[1]]=b[m[0]]=k}else return{result:EINVPORTFMT,target:n};else"ips"==h?(h=id(k+m[0]).value,k=id(k+m[1]).value,void 0!=b[m[0]]&&(c[m[0]]=b[m[0]],c[m[1]]=b[m[1]]),b[m[0]]=h>k?k:h,b[m[1]]=h>k?h:k):(void 0!=b[l]&&(c[l]=b[l]),g!=b[l]&&(r=!0),b[l]=g)}return{result:ENONE,isChanged:r,target:n}},DataGrid.prototype._toolSaveHandle_Add=function(a,b,d){if(void 0!=a){var c=this._getTrIndex(a);this._state.isBlank=!1;
return this._toolSaveHandle_SaveData(a,b,c,d)}},DataGrid.prototype._toolSaveHandle_stateChange=function(a,b){var d,c;c=!0==this._ops.hasSelBox&&0!=a.cells[0].innerHTML.length;!0==c&&(d=a.cells[0].childNodes[0],d=d.checked);this._trCleanCell(a);this._contentFill(a,this._ops.list,!0,b,this._ops.data[b],this._getDRL());!0==c&&(a.cells[0].childNodes[0].checked=d)},DataGrid.prototype._toolSaveHandle=function(a,b,d){var c=this,e,f,h,g,l,k=this._ops.data,m={};a.onclick=function(){function a(){for(var b in m)k[h][b]=
m[b]}function p(b){!1==b?a():(c._enableEditBtns(),c._setEditTr(null),c._toolSaveHandle_stateChange(g,h),c._event.state="default",g.id="","add"==f&&(c._resetID(),g.removeAttribute("dataGridLastIndex")))}e=c._eventStateGet();switch(e){case "default":return;case "edit":f="edit";g=c._getEditTr();h=c._getTrIndexInDataObj(g);m={};l=c._toolSaveHandle_Edit(g,k[h],c._getTrIndex(g),m);break;case "add":f="add",h=c._getDRL()-1,g=c._getEditTr(),k[h]=void 0==k[h]?{}:k[h],m={},l=c._toolSaveHandle_Add(g,k[h],m)}if(l.result!=
ENONE){switch(l.result){case EINVNET:showAlert(errStr.ipAddrNetErr,l.target);break;case EINVIP:showAlert(errStr.ipAddrErr,l.target);break;case EINVIPFMT:showAlert(errStr.ipAddrFmtErr,l.target);break;case EINVGROUPIP:showAlert(errStr.ipAddrGroupErr,l.target);break;case EINVLOOPIP:showAlert(errStr.ipAddrLoopErr,l.target);break;case EINVMACFMT:showAlert(errStr.macFmtErr,l.target);break;case EINVMACZERO:showAlert(errStr.macZeroErr,l.target);break;case EINVMACBROAD:showAlert(errStr.macBroadErr,l.target);
break;case EINVMACGROUP:showAlert(errStr.macGroupErr,l.target);break;case EINVMASK:showAlert(errStr.maskErr,l.target);break;case EINVPORTFMT:showAlert(errStr.portIllegalFmtErr,l.target)}a()}else"edit"==f&&!0!=l.isChanged?(c._toolSaveHandle_stateChange(g,h),c._event.state="default",g.id="",c._enableEditBtns(),c._setEditTr(null)):void 0!=b?!0==d?b(f,h,p):p(b(f,h)):p(!0)}},DataGrid.prototype._toolSaveAllHandle=function(a,b,d){a.onclick=function(){void 0!=b&&b()}},DataGrid.prototype._toolDelHandle=function(a,
b,d){var c=this;a.onclick=function(){function a(){function e(a){if(!1!=a){r=k.split("-");t=q[0];b==r.length+t-1?(t--,t=t||0):"none"==h[t].style.display&&(t=q[0]);a=0;for(var b=r.length;a<b;a++)s=r[a],q[a]-=a,f.deleteRow(q[a]),c._blankData(s),l=y[s],y.push(l),y.splice(s,1);w=!0==c._ops.hasHead?h.length-1:h.length;c._state.isBlank=0<w?!1:!0;w="add"==c._eventStateGet()?w-1:w;x=parseInt(t/c._ops.paging.num)+(0<t%c._ops.paging.num?1:0);x=1>x?1:x;c._pageList(w,x);!0==u&&(c._eventStateSet("default",!0),
c._setEditTr(null));!0==c._ops.hasID&&c._resetID();c._flushBtn()}}void 0==b?e(!0):!0==d?b(k,e):e(b(k))}var f=c._table,h=c._table.rows,g,l,k="",m,n,p=h.length,r,q=[],s,x=0,y=c._ops.data,v=c._getTrIndex(c._getEditTr()),u=!1,t=0,w=0;g="";if("delSelUn"!=this.className){m=!0==c._ops.hasHead?1:0;n=h.length-m;g="add"==c._eventStateGet()?-1:0;for(n+=g;m<p;m++)tr=h[m],1!=h[m].cells.length&&(l=h[m].cells[0].childNodes[0],null!=l&&!0==l.checked&&(k+=n-m-g+"-",q.push(m),v==m&&(u=!0)));w=k.length;0!=w&&(k=k.substring(0,
w-1),g=c._ops.cleanTip,0!=g.length&&void 0!=g&&n==k.split("-").length?showConfirm(g,function(b){!0==b&&a()}):a())}}},DataGrid.prototype._toolCancelHandle=function(a,b){var d=this,c,e;a.onclick=function(){c=d._eventStateGet();table=d._table;switch(c){case "edit":tr=d._getEditTr();index=d._getTrIndexInDataObj(tr);d._toolSaveHandle_stateChange(tr,index);break;case "add":e=table.rows.length-1;table.deleteRow(!0==d._ops.hasHead?1:0);e=!0==d._ops.hasHead?e-1:e;if(0==e){d._state.isBlank=!0;d._content_blank();
break}d._pageList(e,1)}d._enableEditBtns();d._setEditTr(null);d._event.state="default";d._flushBtn()}},DataGrid.prototype._toolAbleHandle=function(a,b,d,c){var e=this;a.onclick=function(){function a(b){if(!1!=b){for(var c in g)if(k=g[c],"checkbox"==k.type&&!1==k.edit){m=k.name;p=c;break}if(void 0!=m){n=e._getListLen();for(b=0;b<n;b++)h[b][m]="enable"==d?1:0;n=l.length;!0==e._ops.hasID&&p++;for(c=!0==e._ops.hasHead?1:0;c<n;c++)r=e._getDomChildNode(l[c].cells[p],"input checkbox"),r.checked="enable"==
d?!0:!1}}}var h=e._ops.data,g=e._ops.list,l=e._table.rows,k,m,n=0,p,r;!0!=e._state.isBlank&&(void 0==b?a(!0):!0==c?b(d,a):a(b(d)))}},DataGrid.prototype._toolEnableHandle=function(a,b,d){this._toolAbleHandle(a,b,"enable",d)},DataGrid.prototype._toolDisableHandle=function(a,b,d){this._toolAbleHandle(a,b,"disable",d)},DataGrid.prototype._toolCleanHandle=function(a,b,d){var c=this;a.onclick=function(){function a(b){!0==b&&(c._blankData(0),f.splice(1,f.length-1),!0==c._state.isBlank,c._refresh(1),c._setEditTr(null),
c._event.state="default",c._flushBtn(),c._pageList(0,1))}var f=c._ops.data,h,g;if(!0!=c._state.isBlank||"default"!=c._event.state)h=label.delAllConfirm,g=c._ops.cleanTip,void 0!=g&&0!=g.length&&(h=g),showConfirm(h,function(f){!1!=c._state.isBlank&&"add"==c._event.state||!1==f||(void 0==b?a(!0):!0==d?b(a):a(b()))})}},DataGrid.prototype._toolRefreshHandle=function(a,b,d){var c=this;a.onclick=function(){function a(b){!0==b&&(c._cleanList(c._ops.id+"pagIngList"),c._refresh(1),c._setEditTr(null),c._event.state=
"default",c._flushBtn())}void 0!=b&&(!0==d?b(a):a(b()))}},DataGrid.prototype._toolEmailHandle=function(a,b,d){a.onclick=function(){void 0!=b&&b()}},DataGrid.prototype._toolClearAllHandle=function(a,b,d){var c=this;a.onclick=function(){function a(b){!1!=b&&(c._cleanList(c._ops.id+"pagIngList"),c._refresh(1),c._setEditTr(null),c._event.state="default",c._flushBtn())}void 0==b&&a(!0);!0==d?b(a):a(b())}},DataGrid.prototype._toolClearSelHandle=function(a,b,d){var c=this;a.onclick=function(){function a(b){if(!1!=
b){k=q.length;for(b=0;b<k;b++)v=q[b],!0==v.clear&&(y[v.name]={clear:!0,clearValue:v.clearValue});n=g.split("-");k=n.length;for(b=0;b<k;b++){u=r[b];for(var d in u)v=y[d],void 0!=v&&!0==v.clear&&(u[d]=v.clearValue)}k=p.length;l=1;l+=c._ops.hasID?1:0;for(b=0;b<k;b++)for(u=p[b],x=f[u].cells.length,d=l;d<x;d++)v=y[q[d-l].name],void 0!=v&&!0==v.clear&&(s==u?f[u].cells[d].value=v.clearValue:f[u].cells[d].innerHTML=v.clearValue,f[u].cells[0].childNodes[0].checked=!1);c._selectAll();c._flushBtn()}}var f=c._table.rows,
h,g="",l,k,m=f.length,n,p=[],r=c._ops.data,q=c._ops.list,s=c._getTrIndex(c._getEditTr()),x=0,y={},v,u;if("clrUn"!=this.className){l=!0==c._ops.hasHead?1:0;k=f.length-l;h="add"==c._eventStateGet()?-1:0;k+=h;for(var t=l;t<m;t++)tr=f[t],1!=f[t].cells.length&&(u=f[t].cells[0].childNodes[0],null!=u&&!0==u.checked&&(g+=k-t-h+"-",p.push(t)));0!=g.length&&(g=g.substring(0,g.length-1),void 0==b?a(!0):!0==d?b(g,a):a(b(g)))}}},DataGrid.prototype._setToolBar=function(){var a=this._ops.toolBar,b,d,c,e,f;if(null!=
a){b=$("#"+a.id+" span");for(var h=0,g=b.length;h<g;h++)switch(c=b[h],d=c.getAttribute("gridType"),e=a[d],f=a.asyn,d){case "add":this._toolBar.addBtn=c;this._toolAddHandle(c,e,f);break;case "save":this._toolSaveHandle(c,e,f);break;case "saveAll":this._toolSaveAllHandle(c,e,f);break;case "delAll":c.className="delAll";this._toolBar.delAllBtn=c;this._toolCleanHandle(c,e,f);break;case "delSel":c.className="delSelUn";this._toolBar.delSelBtn=c;this._toolDelHandle(c,e,f);break;case "cancel":this._toolCancelHandle(c,
e);break;case "enable":this._toolEnableHandle(c,e,f);break;case "disable":this._toolDisableHandle(c,e,f);break;case "refresh":this._toolRefreshHandle(c,e,f);break;case "email":this._toolEmailHandle(c,e,f);break;case "clrSel":this._toolBar.clrSelBtn=c;this._toolClearSelHandle(c,e,f);break;case "clrAll":this._toolClearAllHandle(c,e,f)}}},DataGrid.prototype._getListLen=function(){var a=this._ops.list,b=this._ops.data,d=0,c,e=a[this._ops.checkIndex].name,a=this._types[a[this._ops.checkIndex].type],f;
for(f in b){c=b[f][e];if(c===a||void 0===c||0==c.toString().length)break;d++}return d},DataGrid.prototype._content_delete_blank=function(){var a;!1!=this._ops.spBlank&&!0==this._state.isBlank&&(this._state.isBlank=!1,a=!0==this._ops.hasHead?1:0,this._table.deleteRow(a))},DataGrid.prototype._content_blank=function(){var a,b=this._table;!1!=this._ops.spBlank&&(a=b.insertRow(-1),a=a.insertCell(-1),a.colSpan=this._state.colNum,!1==this._ops.hasHead&&setStyle(a,{width:b.offsetWidth+"px"}),a.innerHTML=
label.blankTable)},DataGrid.prototype._editable=function(){var a=this._ops.list,b;if(!1==this._ops.edit)return!1;for(var d in a)if(b=a[d].edit,!0==b)return!0;return!1},DataGrid.prototype._timeHandle=function(a,b){if(4294967295==a)b.innerHTML=label.forever;else{var d=new Date;d.setHours(parseInt(a/3600),parseInt(a%3600/60),parseInt(a%3600%60),0);b.innerHTML=d.toTimeString().substring(0,8)}},DataGrid.prototype._timePHandle=function(a,b){if(4294967295==a)b.innerHTML=label.forever;else{var d,c,e;d=parseInt(a/
3600);c=parseInt(a%3600/60);e=parseInt(a%3600%60);10>d&&(d="0"+d);10>c&&(c="0"+c);10>e&&(e="0"+e);b.innerHTML=d+":"+c+":"+e}},DataGrid.prototype._selectHandle=function(a,b,d){var c=a.options;b=b[a.name];a=a.blankStr;if(void 0!=c[0].value)for(var e=0,f=c.length;e<f;e++){if(c[e].value==b){c=c[e].str;d.innerHTML=c==a?"":htmlEscape(c);break}}else c=c[b].str,d.innerHTML=c==a?"":htmlEscape(c)},DataGrid.prototype._strSelectHandle=function(a,b,d){var c=a.options;b=parseInt(b[a.name]);var e="",f;for(f in c)if(a=
c[f],void 0!=a.value){if(b==parseInt(a.value)){e=a.str;break}}else if(b==f){e=a.str;break}d.innerHTML=htmlEscape(e)},DataGrid.prototype._checkBoxHandle=function(a,b,d,c){var e=el("input"),f=b[a.name];e.type="checkbox";e.checked=!0==f;void 0!=a.func&&(e.onclick=function(d){d=d||window.event;var e=b[a.name];b[a.name]=!0==this.checked?1:0;!1==a.func(c,{obj:this})&&(b[a.name]=e,this.checked=1==e?!0:!1);stopProp(d)});d.appendChild(e)},DataGrid.prototype._radioHandle=function(a,b,d,c){var e=el("input"),
f=b[a.name];e.type="radio";e.checked=!0==f;void 0!=a.func&&(e.onclick=function(d){d=b[a.name];b[a.name]=!0==this.checked?1:0;!1==a.func(c,{obj:this})&&(b[a.name]=d,this.checked=1==d?!0:!1)});d.appendChild(e)},DataGrid.prototype._btnHandle=function(a,b,d,c){var e=a.subType,f=el("input"),h=this;f.type="button";f.value=a.value?a.value:"";if(void 0!=e)switch(e){case "bind":b=b[a.name];!0==b?(f.className=a.classNameUn,f.disabled=!0):f.className=a.className;f.onclick=function(){a.click(c,{obj:this})};break;
case "radio":b=b[a.name];f.className=!0==b?a.className:a.classNameUn;f.onclick=function(){$("#"+h._ops.id+" input."+a.className).attr("class",a.classNameUn);this.className=a.className;a.click(c,{obj:this})};f.onfocus=function(){this.blur()};break;case "switch":b=b[a.name],void 0==a.onStr&&void 0==a.offStr&&(a.onStr=label.WDSDHCPOn,a.offStr=label.WDSDHCPOff),void 0==a.classNameUn&&(a.classNameUn=a.className),!0==b?(f.className=a.className,f.value=a.onStr):(f.className=a.classNameUn,f.value=a.offStr),
f.onclick=function(){!0==a.click(c,{obj:this})&&(this.value==a.onStr?(this.className=a.classNameUn,this.value=a.offStr):(this.className=a.className,this.value=a.onStr))}}else f.className=a.className,f.onclick=function(){a.click(c,{obj:this})};d.appendChild(f)},DataGrid.prototype._portsHandle=function(a,b,d){a=a.name.split(" ");d.innerHTML=b[a[1]]!=b[a[0]]?b[a[0]]+(0==b[a[1]].length?"":" - "+b[a[1]]):b[a[0]]},DataGrid.prototype._ipsHandle=function(a,b,d){a=a.name.split(" ");d.innerHTML=b[a[1]]!=b[a[0]]?
b[a[0]]+(0==b[a[1]].length?"":" - "+b[a[1]]):b[a[0]]},DataGrid.prototype._popVigHandle=function(a,b,d,c){b=a.popObj.subList[b[a.name]][a.popObj.name];a=this._calcShowSize(c,a);b=void 0==b?"":b.toString();d.title=b;d.innerHTML=htmlEscape(getStrInMax(b,a))},DataGrid.prototype._signalHandle=function(a,b,d){var c=el("i"),e=el("i");a=parseInt(b[a.name]);c.className="signalCon";e.className="signal";a=!0==isNaN(a)?0:a;e.style.width=3*a+3*(a-1)+"px";c.appendChild(e);d.appendChild(c)},DataGrid.prototype._speedHandle=
function(a,b,d){a=b[a.name];d.innerHTML=0==parseInt(a)?label.disLimit:a+"Kb/s"},DataGrid.prototype._trCleanCell=function(a){var b=a.cells.length;try{a.innerHTML=""}catch(d){for(;0<b;)a.deleteCell(0),b=a.cells.length}},DataGrid.prototype._trEdit=function(a){var b=this._ops.data,d=!1,c=-1;!0==this._ops.hasSelBox&&(d=a.cells[0].childNodes[0].checked);this._trCleanCell(a);c=this._getTrIndexInDataObj(a);this._fillEditRow(a,this._getTrIndex(a),b[c]);!0==this._ops.hasSelBox&&(a.cells[0].childNodes[0].checked=
d)},DataGrid.prototype._getTrIndex=function(a){var b=this._table.rows,d=-1;if(null==a)return d;for(var c=!0==this._ops.hasHed?1:0,e=b.length;c<e;c++)if(a===b[c]){d=c;break}return d},DataGrid.prototype._disableEditBtns=function(){$("table.dataGrid i.edit").toggleClass("edit").toggleClass("unedit")},DataGrid.prototype._enableEditBtns=function(){$("table.dataGrid i.unedit").toggleClass("unedit").toggleClass("edit")},DataGrid.prototype._editBtnClick=function(a,b){var d=this;a.onclick=function(){var a,
e,f,h=d._eventStateGet();switch(h){case "edit":if(!1==d._ops.spAutoEdit)return;break;case "default":break;default:return}e=this.parentNode;!0==b?(d._eventStateSet("edit"),!0==d._ops.spAutoEdit?(f=d._getEditTr(),a=d._getTrIndexInDataObj(f),-1!=a&&"default"!=h&&(d._trCleanCell(f),f.id="",d._contentFill(f,d._ops.list,!0,a,d._ops.data[a],d._getDRL()))):d._disableEditBtns(),d._trEdit(e)):null!=d._ops.click&&d._ops.click(d._getTrIndexInDataObj(e))}},DataGrid.prototype._editBtnHandle=function(a,b,d){d=document.createElement("i");
d.className="edit";this._editBtnClick(a,b);a.style.cursor="pointer";a.appendChild(d)},DataGrid.prototype._singelSelHandle=function(a,b){var d,c,e,f=!0,h=!1;if(!1!=b._ops.hasHead){d=b._table.rows;c=d[0].cells[0].childNodes[0];e=d.length;!1==a.checked&&(f=!1);for(var g=1;g<e;g++)if(0!=d[g].cells[0].innerHTML.length){if(1==d[g].cells.length){c.checked=!0;return}a=d[g].cells[0].childNodes[0];"none"!=d[g].style.display&&!1==a.checked?f=!1:h=!0}c.checked=f;this._toolSelBtnState(h)}},DataGrid.prototype._calcShowSize=
function(a,b){var d;d=parseInt($(this._table).css("fontSize"));d=parseInt(this._state.headCells[a].width/(0.65*d));return d=void 0!=b.maxSize?b.maxSize:d},DataGrid.prototype._contentFill=function(a,b,d,c,e,f){var h,g,l=this._ops.head,k,m=this,n;!0==this._ops.hasSelBox&&(h=a.insertCell(-1),k=document.createElement("input"),k.type="checkbox",k.onclick=function(){m._singelSelHandle(k,m)},h.appendChild(k),!1==this._ops.hasHead&&setStyle(h,{width:this._set.IDWidth}));!0==this._ops.hasID&&(h=a.insertCell(-1),
h.innerHTML=f-c,!1==this._ops.hasHead&&setStyle(h,{width:this._set.IDWidth.width+"px"}));for(var p in b)switch(f=b[p],g=f.type,h=a.insertCell(-1),!1==this._ops.hasHead&&setStyle(h,{width:l[p].width+"px"}),null!=f.styles&&setStyle(h,f.styles),g){case "btn":this._btnHandle(f,e,h,c);break;case "time":this._timeHandle(e[f.name],h);break;case "timeP":this._timePHandle(e[f.name],h);break;case "select":this._selectHandle(f,e,h);break;case "checkbox":!1==f.edit&&this._checkBoxHandle(f,e,h,c);break;case "radio":!1==
f.edit&&this._radioHandle(f,e,h,c);break;case "strSelect":this._strSelectHandle(f,e,h);break;case "ports":this._portsHandle(f,e,h);break;case "ips":this._ipsHandle(f,e,h);break;case "speed":this._speedHandle(f,e,h);break;case "popVig":this._popVigHandle(f,e,h,p);break;case "signal":this._signalHandle(f,e,h);break;case "mac":n=e[f.name];h.innerHTML=n=void 0==n?"":n.toString().toUpperCase();break;default:g=this._calcShowSize(p,f),n=e[f.name],n=void 0==n?"":n.toString(),h.innerHTML=!0==f.igHTMLEscape?
getStrInMax(n,g):htmlEscape(getStrInMax(n,g)),h.title=n,void 0!=f.className&&(h.className=f.className)}!0==this._ops.edit&&(h=a.insertCell(-1),this._editBtnHandle(h,d,c),!1==this._ops.hasHead&&setStyle(h,{width:this._set.editWidth}))},DataGrid.prototype._refresh=function(a){for(var b=this._table,d=!0==this._ops.hasHead?1:0,c=0,e=b.rows.length;c<e;c++)null!=b.rows[d]&&b.deleteRow(d);this._event.state="default";this._setEditTr(null);this._contentCreate(a);this._state.isBlank=0<this._table.rows.length-
d?!1:!0;this._IESixResize()},DataGrid.prototype._contentCreate=function(a){var b=this._ops.list,d=this._ops.data,c,e=this._table,f=0,h=!1;c=this._ops.paging.num;var g,l=(a-1)*c,k;if(null!=b&&(!1!=this._ops.hasHead||null!=this._ops.head))if(f=this._getListLen(),0==f)this._state.isBlank=!0,this._content_blank(),this._cleanList(this._ops.id+"pagIngList");else{h=this._editable();f=f>this._ops.max?this._ops.max:f;l=f-1-l;k=l-c+1||0;for(var m=f-1;0<=m;m--)m>l||m<k?(c=e.insertRow(-1),c.insertCell(-1),c.style.display=
"none"):(g=d[m],c=e.insertRow(-1),this._contentFill(c,b,h,m,g,f));this._flushBtn();this._pageList(f,a)}},DataGrid.prototype._toolSelBtnState=function(a){var b;null!=this._ops.toolBar&&(b=this._toolBar.delSelBtn,null!=b&&(b.className=!0==a?"delSel":"delSelUn"),b=this._toolBar.clrSelBtn,null!=b&&(b.className=!0==a?"clrEn":"clrUn"))},DataGrid.prototype._selectAll=function(){for(var a=this._table.rows,b=a.length,d=a[0].cells[0].childNodes[0].checked,c,d=!0==this._ops.hasHead?a[0].cells[0].childNodes[0].checked:
!1,e=!0==this._ops.hasHead?1:0;e<b;e++)1!=a[e].cells.length&&0!=a[e].cells.length&&(c=a[e].cells[0].childNodes[0],null!=c&&(c.checked="none"!=a[e].style.display?d:!1));this._toolSelBtnState(d)},DataGrid.prototype._selectAllCreate=function(a,b){var d=document.createElement("input"),c=this;d.type="checkbox";d.className="selAllBox";d.onclick=function(){c._selectAll()};return d},DataGrid.prototype._headCreate=function(){var a=this._ops.head,b=this,d,c;c=this._table;var e,f=this._ops.list,h,g,l,k,m=this._state.headCells;
h=0;var n=this._state.headWidth;if(!1!=this._ops.hasHead)if(null==a)void 0!=c.rows[0]&&(this._state.colNum=c.rows[0].cells.length);else{d=c.insertRow(-1);d.className=this._set.headClassName;this._state.colNum=this._ops.list.length;this._event.sortName=this._ops.sortName;e=parseInt(c.offsetWidth);!0==this._ops.hasSelBox&&(c=d.insertCell(-1),c.appendChild(this._selectAllCreate()),setStyle(c,{width:this._set.IDWidth,textAlign:"center"}),e-=parseInt(this._set.IDWidth)+1,this._state.colNum++);!0==this._ops.hasID&&
(c=d.insertCell(-1),c.innerHTML=g.ID,setStyle(c,{width:this._set.IDWidth,textAlign:"center"}),e-=parseInt(this._set.IDWidth)+1,this._state.colNum++);!0==this._ops.edit&&(e-=parseInt(this._set.editWidth)+1);e-=a.length;for(var p in a)if("undefined"!=typeof a[p].sort){this._event.sortable=!0;break}for(p in a){var r=a[p];l=f[p].name;c=d.insertCell(-1);setStyle(c,{textAlign:"center",padding:parseFloat(this._ops.headpadding)+"px"});"undefined"!=typeof r.width&&(h=parseInt(r.width/n*e),m[p]=void 0==m[p]?
{}:m[p],m[p].width=h,setStyle(c,{width:h+"px"}));void 0==k&&(k=c.offsetHeight);!0==this._event.sortable?(h=el("div"),h.className="dataGridSortDiv",c.appendChild(h),g=el("label"),g.className=this._ops.sortName==l?"dataGridSortLbl dataGridSortLblHv":"dataGridSortLbl dataGridSortLblDe",g.style.lineHeight=k+"px",g.innerHTML=r.field,h.appendChild(g),g=el("i"),g.className=this._ops.sortName==l&&"up"==this._ops.sortType?"dataGridSortArrow dataGridSortUp":"dataGridSortArrow dataGridSortDown",g.style.display=
this._ops.sortName==l?"inline-block":"none",g.sortType=this._ops.sortName==l?this._ops.sortType:"null",h.appendChild(g),g=el("p"),g.className=this._ops.sortName==l?"dataGridSortP dataGridSortPHv":"dataGridSortP dataGridSortPDe",g.innerHTML="&nbsp;",h.appendChild(g)):(h=c,c.innerHTML=r.field);"undefined"!=typeof r.sort&&(c.style.cursor="pointer",c.onclick=function(a){return function(){b._sort(this,a)}}(l),c.onmouseover=function(a){return function(){b._event.sortName!=a&&(this.id="DataGridSortHeadCellId",
$("#DataGridSortHeadCellId p.dataGridSortP").css("backgroundColor","#86B157"),this.id="")}}(l),c.onmouseout=function(a){return function(){b._event.sortName!=a&&(this.id="DataGridSortHeadCellId",$("#DataGridSortHeadCellId p.dataGridSortP").css("backgroundColor","#E6E6E6"),this.id="")}}(l))}!0==this._ops.edit&&(c=d.insertCell(-1),c.innerHTML=btn.edit,setStyle(c,{width:this._set.editWidth,textAlign:"center"}),this._state.colNum++)}},DataGrid.prototype._sort=function(a,b){var d=this._table,c=$("#"+d.id+
" i.dataGridSortArrow"),e,f,h;a.id="DataGridSortHeadCellId";e=$("#DataGridSortHeadCellId i.dataGridSortArrow")[0];"null"==e.sortType||"up"==e.sortType?(f="down",h="dataGridSortArrow dataGridSortDown"):(f="up",h="dataGridSortArrow dataGridSortUp");if(null!=this._ops.sortFunc&&!1!=this._ops.sortFunc(b,f)){this._event.sortName=b;$("#"+d.id+" p.dataGridSortP").css("backgroundColor","#E6E6E6");$("#"+d.id+" label.dataGridSortLbl").css("color","#737373");c.css("display","none");for(var g in c)c[g].sortType=
"null";$("#DataGridSortHeadCellId p.dataGridSortP").css("backgroundColor","#86B157");$("#DataGridSortHeadCellId label.dataGridSortLbl").css("color","#86B157");e.style.display="inline-block";e.sortType=f;e.className=h;a.id="";this._refresh(this._pgList.page)}},DataGrid.prototype._fillDefault=function(){var a=this._ops.list,b,d;for(d in a)b=a[d],void 0==b.type&&(b.type="str"),void 0==b.edit&&(b.edit=!0),void 0==b.clear&&(b.clear=!1)},DataGrid.prototype._headWidthCol=function(){var a=this._ops.head,
b=0,d;if(!1!=this._ops.hashead){for(var c in a)d=a[c].width,void 0!=d&&(b+=d);this._state.headWidth=b}},DataGrid.prototype._optionsInit=function(a){var b,d;for(d in a)if(b=a[d],"undefined"!=typeof this._ops[d])if("object"!=typeof b||b instanceof Array||null==this._ops[d])this._ops[d]=b;else for(var c in b)this._ops[d][c]=b[c];this._fillDefault();this._headWidthCol()},DataGrid.prototype._getTableObj=function(){this._table=this._ops.obj;null==this._table&&(this._table=id(this._ops.id));return this._table},
DataGrid.prototype._tableSet=function(){var a=this._set;null!=a.styles&&("string"==typeof a.styles?this._table.className+=a.styles:setStyle(this._table,a.styles));!0==this._ops.fixed&&setStyle(this._table,{tableLayout:"fixed"})},DataGrid.prototype._IESixResize=function(){!0==isIESix&&"undefined"!=typeof highSetAutoFit&&highSetAutoFit()},DataGrid.prototype._pageList=function(a,b){var d=this._table.parentNode,c=el("div"),e=this._ops.paging,f=this._ops.id+"pagIngList",h;b=void 0==b?1:b;b=1>b?1:b;0==
this._pgList.id.length&&(this._pgList.id=c.id=f,c.className="pageListPo",null!=this._ops.toolBar&&(h=id(this._ops.toolBar.id)),null!=h?d.insertBefore(c,h):d.appendChild(c),this._pgList.obj=c,c.style.overflow="hidden");this._cleanList(f);this._fillList(f,b,e.num,this._ops.id,a)},DataGrid.prototype._changeTable=function(a,b){var d=this._table.rows,c=d.length,e=!0==this._ops.hasHead?a+1:a,f=!0==this._ops.hasHead?a:a-1,h=0,g=!1,l=this._ops.list,k=this._ops.data,g=this._editable(),m=0,n=0,p;this._pgList.page=
parseInt(e/b)+1;m=!0==this._ops.hasHead?c-1:c;n="add"==this._eventStateGet()?-1:0;m+=n;p=!0==isIE?!0==isIENormal?"table-row":"block":"table-row";for(var r=!0==this._ops.hasHead?1:0;r<c;r++){var q=d[r];r<e||r>f+b?q.style.display="none":(1==q.cells.length&&(q.deleteCell(0),h=m-r-n,this._contentFill(q,l,g,h,k[h],m)),q.style.display=p)}!0==this._ops.hasSelBox&&(!0==this._ops.hasHead&&(d[0].cells[0].childNodes[0].checked=!1),this._selectAll());this._IESixResize()},DataGrid.prototype._changeListDiv=function(a,
b){var d=19*id(a).childNodes.length,c=0;if(!0==isIESix){var e=$("#"+this._ops.id+"pagIngList div."+this._pgList.plcClassName)[0],c=d-(0<b?b:-1*b);e.style.width=96>c?c+"px":"96px"}},DataGrid.prototype._listNodeClick=function(a,b,d,c){var e=this,f=this._pgList.num,h=b+this._pgList.listDivStr,g=id(h);d=b+this._pgList.listArrowRStr;b+=this._pgList.listArrowLStr;var l=g.childNodes,k=l.length,m=0,n=0,p=0,r=function(){l[a].className=e._pgList.ListSpanSClassName;l[a].style.cursor="default"},q=function(){var b=
parseInt((a+1-f)/(f-2));a<f-1||(p=f+b*(f-2)-1,n=e._pgList.listMarginLeft*(f-2)*((p+1-f)/(f-2)+1),g.style.marginLeft=-1*n+"px",e._changeListDiv(h,n))};if("default"!=l[a].style.cursor){for(var s=0;s<k;s++)if("default"==l[s].style.cursor){l[s].className=this._pgList.ListSpanClassName;l[s].style.cursor="pointer";m=s;break}0==a?(id(b).disabled=!0,id(d).disabled=!1,r(),g.style.marginLeft="0px",e._changeListDiv(h,0)):a==k-1?(id(b).disabled=!1,id(d).disabled=!0,r(),q()):0==(a+1-f)%(f-2)&&0<=a+1-f?(id(b).disabled=
!1,id(d).disabled=!1,r(),a>m&&(n=e._pgList.listMarginLeft*(f-2)*((a+1-f)/(f-2)+1),g.style.marginLeft=-1*n+"px",e._changeListDiv(h,n))):0==(a+2-f)%(f-2)&&0<=a+2-f?(id(b).disabled=!1,id(d).disabled=!1,r(),a<m&&(n=e._pgList.listMarginLeft*(f-2)*((a+1-(f-2+1))/(f-2)),g.style.marginLeft=-1*n+"px",e._changeListDiv(h,n))):(id(b).disabled=!1,id(d).disabled=!1,r());this._changeTable(a*c,c)}},DataGrid.prototype._listMove=function(a,b,d,c){var e=this,f,h=this._pgList.num,g=a+this._pgList.listDivStr;d=a+this._pgList.listArrowRStr;
var l=a+this._pgList.listArrowLStr,k=id(g),m=k.childNodes;a=m.length;var n=!0==b?1:-1;d=id(d);var l=id(l),p=function(){m[q].className=e._pgList.ListSpanClassName;m[q].style.cursor="pointer";m[q+n].className=e._pgList.ListSpanSClassName;m[q+n].style.cursor="default"},r=function(){var a=e._pgList.listMarginLeft,b=k.style.marginLeft;b&&"0px"!=b?(f=parseInt(b)+-1*n*a*(h-2),e._changeListDiv(g,f),k.style.marginLeft=f+"px"):(f=n*a*(h-2),e._changeListDiv(g,f),k.style.marginLeft=-1*f+"px")};if(!(!0==b&&!0==
d.disabled||!1==b&&!0==l.disabled)){for(var q=0;q<a;q++)if("default"==m[q].style.cursor)return q==a-2&&b?(p(),d.disabled=b,l.disabled=!b,0==(q+2-h)%(h-2)&&0<=q+2-h&&r()):1!=q||b?0==(q+2-h)%(h-2)&&0<=q+2-h&&b?(p(),r(),d.disabled=!b,l.disabled=!b):0==(q+1-h)%(h-2)&&0<=q+1-h&&!b?(p(),r(),d.disabled=b,l.disabled=b):(p(),b?l.disabled=!b:d.disabled=b):(p(),d.disabled=b,l.disabled=!b),b?this._changeTable((q+1)*c,c):this._changeTable((q-1)*c,c),!0;clearSelection()}},DataGrid.prototype._fillList=function(a,
b,d,c,e){var f=id(a),h=e/d+(0==e||0<e%d?1:0),g=id(c),l=this,k=0;if(e<=d){f=g.rows;id(a).style.display="none";b=!0==isIE?!0==isIENormal?"table-row":"block":"table-row";e=0;for(k=f.length;e<k;e++)f[e].style.display=b;this._changeTable(0,d)}else{id(a).style.display="block";e=document.createElement("span");e.className="pageArrow pageArrowLa";e.id=a+this._pgList.listArrowRStr;e.onclick=function(){l._listNodeClick(parseInt(h-1),a,c,d)};f.appendChild(e);e=document.createElement("span");e.className="pageArrow pageArrowL";
e.id=a+this._pgList.listArrowRStr;e.onclick=function(){l._listMove(a,!0,c,d)};f.appendChild(e);e=document.createElement("div");e.className=this._pgList.plcClassName;f.appendChild(e);k=document.createElement("div");k.className="pageListDiv";k.id=a+this._pgList.listDivStr;e.appendChild(k);for(e=1;e<=h;e++)g=document.createElement("span"),g.innerHTML=e,g.className=this._pgList.ListSpanClassName,g.onclick=function(b){return function(){l._listNodeClick(b,a,c,d)}}(e-1),k.appendChild(g);e=document.createElement("span");
e.className="pageArrow pageArrowR";e.id=a+this._pgList.listArrowLStr;e.onclick=function(){l._listMove(a,!1,c,d)};f.appendChild(e);e=document.createElement("span");e.className="pageArrow pageArrowFi";e.id=a+this._pgList.listArrowRStr;e.onclick=function(){l._listNodeClick(0,a,c,d)};f.appendChild(e);this._listNodeClick(b-1,a,c,d)}clearSelection()},DataGrid.prototype._cleanList=function(a){a=id(a);null!=a&&(a.innerHTML="")})};
