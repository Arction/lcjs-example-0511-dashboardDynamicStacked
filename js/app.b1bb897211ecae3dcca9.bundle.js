(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,i)=>{const s=i(89),n=i(863),{lightningChart:l,emptyFill:o,emptyLine:a,transparentFill:r,Themes:c,AxisTickStrategies:d,synchronizeAxisIntervals:y,LegendBoxBuilders:m}=s,{createProgressiveTraceGenerator:h}=n,k=l(),p=document.createElement("div"),S=document.getElementById("chart")||document.body;S===document.body&&(document.body.style.width="100vw",document.body.style.height="100vh",document.body.style.margin="0px"),S.append(p),p.style.width="100%",p.style.height="100%",p.style.display="flex",p.style.flexDirection="column";const T=document.createElement("div");T.style.height="40px",p.append(T);const g=k.UIPanel({container:T,theme:c[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).addLegendBox(m.HorizontalLegendBox).setTitle("").setBackground((e=>e.setFillStyle(o).setStrokeStyle(a)));let x=new Array(5).fill(0).map(((e,t)=>{const i=(S.getBoundingClientRect().height-40)/5+"px",s=`Channel #${t+1}`,n=document.createElement("div");n.style.height=i,p.append(n);const l=k.ChartXY({container:n}).setTitle("").setPadding({right:60}).setAutoCursor((e=>e.setTickMarkerXVisible(!1))),o=l.getDefaultAxisX(),a=l.getDefaultAxisY().setTitle(s).setThickness(80),r=l.addLineSeries({dataPattern:{pattern:"ProgressiveX"},automaticColorIndex:t}).setName(s);h().setNumberOfPoints(1e5).generate().toPromise().then((e=>{r.add(e)})),r.onVisibleStateChanged(((e,t)=>{n.style.display=t?"block":"none",c.visible=t,b()})),g.add(r),n.draggable=!0,n.ondragstart=e=>e.dataTransfer.setData("text",c.position),n.ondragover=e=>e.preventDefault(),n.ondrop=e=>{e.preventDefault();const t=Number(e.dataTransfer.getData("text")),i=x.find((e=>e.position===t)),s=c;if(i===s)return;const n=i.position+1,l=s.position+1;!function(e,t,i){if(t===i)return;if(t>i){const e=t;t=i,i=e}const{[t]:s,[i]:n}=e.childNodes;if(i===t+1)e.insertBefore(n,s);else{const t=n.nextSibling;e.replaceChild(n,s),e.insertBefore(s,t)}}(p,n,l),i.position=s.position,s.position=t,x.sort(((e,t)=>e.position-t.position)),b()};const c={name:s,visible:!0,container:n,chart:l,axisX:o,axisY:a,lineSeries:r,position:t};return c}));y(...x.map((e=>e.axisX)));const u=x[0].chart.getTheme(),b=()=>{const e=x.slice().reverse().find((e=>e.visible));x.forEach(((t,i)=>{t.axisX.setTickStrategy(d.Time,(i=>t===e?i.setMajorTickStyle((e=>e.setLabelFillStyle(u.xAxisTimeTicks.majorTickStyle.labelFillStyle).setTickStyle(u.xAxisTimeTicks.majorTickStyle.tickStyle))).setMinorTickStyle((e=>e.setLabelFillStyle(u.xAxisTimeTicks.minorTickStyle.labelFillStyle).setTickStyle(u.xAxisTimeTicks.minorTickStyle.tickStyle))):i.setMajorTickStyle((e=>e.setLabelFillStyle(r).setTickStyle(a))).setMinorTickStyle((e=>e.setLabelFillStyle(r).setTickStyle(a))))).setStrokeStyle(t===e?u.xAxisStrokeStyle:a).setThickness(t===e?{min:void 0,max:void 0}:0)}))};b()}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);