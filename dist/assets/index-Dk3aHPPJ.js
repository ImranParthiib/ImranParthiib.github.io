(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const m="Hello, World!",p=100;function g(e){const n=document.getElementById("welcome-text");let r=0;function s(){r<e.length?(n.innerHTML+=e.charAt(r),r++,setTimeout(s,p)):setTimeout(()=>{n.innerHTML="",r=0,s()},2e3)}s()}const u=["I'm a Frontend Developer & Programming Enthusiast.","Pursuing Computer Science & Engineering.","I'm a Tech Writer & Content Creator."],f=50,y=30,h=1500;let d=0,a=0,i=!1;function c(){const e=u[d],n=i?e.slice(0,a--):e.slice(0,a++);document.getElementById("descriptive-text").innerHTML=n,!i&&a===e.length?(i=!0,setTimeout(c,h)):i&&a===0?(i=!1,d=(d+1)%u.length,setTimeout(c,f)):setTimeout(c,i?y:f)}document.addEventListener("DOMContentLoaded",function(){g(m),c()});document.querySelector("[data-collapse-toggle]").addEventListener("click",function(){const e=document.getElementById("mobile-menu-2");e.classList.toggle("hidden"),e.classList.toggle("border-t-2"),e.classList.toggle("mt-2"),e.classList.toggle("border-red-500")});document.addEventListener("click",function(e){const n=document.getElementById("mobile-menu-2");!document.querySelector("[data-collapse-toggle]").contains(e.target)&&!n.contains(e.target)&&n.classList.add("hidden")});document.getElementById("contact-form").addEventListener("submit",function(e){e.preventDefault();var n=new FormData(this);fetch(this.action,{method:"POST",body:n,headers:{Accept:"application/json"}}).then(function(r){r.ok?(alert("Your message has been sent successfully!"),document.getElementById("contact-form").reset()):alert("Failed to send your message. Please try again.")}).catch(function(r){alert("Failed to send your message. Please try again.")})});document.addEventListener("DOMContentLoaded",()=>{type(),particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.5,random:!1},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})});particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.5,random:!1},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{repulse:{distance:100,duration:.4},push:{particles_nb:4}}},retina_detect:!0});
