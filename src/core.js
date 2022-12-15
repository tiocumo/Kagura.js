{{!objsafe.js!}}

const kagura=function(){
    const kagura={
      Kagura:{{!kaguraapp.js!}},
      Scene:{{!scene.js!}},
      obj:{
        shape:{
          isNewTest:"",
          
          GraphicsProto:{{!obj/shape/graphicsproto.js!}}
        },
        Group:{{!obj/group.js!}}
      },
      Boxer:{{!api/boxer.js!}},
      FullScreen:{{!api/fullscreen.js!}},
      pixi:PIXI,
    };
    kagura.browser={{!browsercheck.js!}}(window.navigator.userAgent)
    kagura.obj.Text={{!obj/text.js!}}
  
    kagura.obj.shape.GraphicsFill={{!obj/shape/graphicsfill.js!}};
    kagura.obj.shape.Circle={{!obj/shape/circle.js!}}
    kagura.obj.shape.Ellipse={{!obj/shape/ellipse.js!}}
    kagura.obj.shape.Path={{!obj/shape/path.js!}};
    kagura.obj.shape.Rect={{!obj/shape/rect.js!}};
    kagura.obj.shape.Polygon={{!obj/shape/polygon.js!}};
    kagura.obj.shape.Star={{!obj/shape/star.js!}};
    kagura.obj.shape.Torus={{!obj/shape/torus.js!}};
    kagura.obj.shape.Line={{!obj/shape/line.js!}};
    
    kagura.Loader={{!api/loader.js!}};
    
    kagura.obj.Sprite={{!obj/sprite.js!}};
    
    return kagura;
  }();
console.log("Kagura.js")