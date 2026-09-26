(function(){
  'use strict';
  function AudioBank(base){
    this.base=base||'assets/audio/';
    this.enabled=true;
    this.volume=.28;
    this.current=null;
    this.items={
      tap:new Audio(this.base+'tap.mp3'),
      open:new Audio(this.base+'open.mp3'),
      close:new Audio(this.base+'close.mp3')
    };
    var k;
    for(k in this.items){if(this.items.hasOwnProperty(k)){this.items[k].preload='auto';this.items[k].volume=this.volume;}}
  }
  AudioBank.prototype.play=function(name){
    if(!this.enabled||!this.items[name])return;
    try{
      if(this.current&&!this.current.paused){this.current.pause();this.current.currentTime=0;}
      var a=this.items[name];a.currentTime=0;this.current=a;
      var p=a.play();if(p&&typeof p.catch==='function')p.catch(function(){});
    }catch(e){}
  };
  AudioBank.prototype.preload=function(){var k;for(k in this.items){if(this.items.hasOwnProperty(k)){try{this.items[k].load();}catch(e){}}}};
  window.AudioBank=AudioBank;
})();
