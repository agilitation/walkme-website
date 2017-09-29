(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.truc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABJi3QAAAWgGAeQgNA7gbApQgSAcgtApQgjAggBAUQgCAZARAgQAHAOARAX");
	this.shape.setTransform(7.3,53.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAZBWQgPgPAAgVQAAgVAPgPQAGgFAFgDIgFgMQgIgTgYgUQgMgKgLgHQgagPgggJQgRgFgLgBQAjgNAnAJQAkAJATAOQAUANAIAMIAQAbQAKAOAFAKQAKADAJAIQAPAPAAAVQAAAVgPAPQgPAPgVAAQgVAAgPgPg");
	this.shape_1.setTransform(32.1,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.truc, new cjs.Rectangle(-1,0,44.3,72.7), null);


(lib.Rond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBvQgtgugBhBQABhAAtgvQAvgtBAgBQBBABAuAtQAvAvAABAQAABBgvAuQguAvhBAAQhAAAgvgvg");
	this.shape.setTransform(15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rond, new cjs.Rectangle(0,0,31.5,31.5), null);


(lib.pied2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#637081").s().p("AtCGyQg/gHgXgSQgRgNgRgqQgNgfgFg6QgCgdAAgWQBSv4OVJBIBeAlQBnAoArANQBGAUA8AeQAUgOApgEQAagCBJAAQAxAAB7gaICegiQAmgGAeAlQAOATAIAUQAAAKgeAeQiWCVi0BGQh4AuiDAaQhZAShuAKQhLAHi9AnQirAjhAATQhDATiwAbQihAZhGAAIgagBg");
	this.shape.setTransform(97.5,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuiEuIgogUIAAiMIdZnPIAaASQAaAUAGAGQAIAIgZAkQgbAlgkAdQi5CVivA8Qi9BDktAXQhSAHijAtQhlAbhdAfQgzARicAfQinAgg4AAQgyAAgygUg");
	this.shape_1.setTransform(102.1,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404040").s().p("AuiEuIgogUIAAiMIdZnPIAaASQAaAUAGAGQAIAIgZAkQgbAlgkAdQi5CVivA8Qi9BDktAXQhSAHijAtQhlAbhdAfQgzARicAfQinAgg4AAQgyAAgygUg");
	this.shape_2.setTransform(102.1,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pied2, new cjs.Rectangle(0,-20.8,199.2,98.9), null);


(lib.pied1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#637081").s().p("ABWH+QiBgTjBhbQi2hfgjgPQi7hQiFgyQh0gsAQguQAKgeAeipQF2s2JnNKIAnAzQAvA6AsAeQAjAZBKA9QBKA5BXAlICgBGQBAAcAkAMQA8AUAABaQAAAMhEAUIisAwQhcAaiJAAQiKAAi3gag");
	this.shape.setTransform(87.6,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADwEHQidgGh7glQg8gShtgxQhkgvhFgeQh+g3h9glQh9glhQg3QgZgRgSgRIgMgOIAIhPIAqgfIaPFJIAyA8QAAAKgOARQgbAghFAfQhOAkiPAMQhIAGhdAAQhHAAhTgEg");
	this.shape_1.setTransform(89.2,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404040").s().p("ADwEHQidgGh7glQg8gShtgxQhkgvhFgeQh+g3h9glQh9glhQg3QgZgRgSgRIgMgOIAIhPIAqgfIaPFJIAyA8QAAAKgOARQgbAghFAfQhOAkiPAMQhIAGhdAAQhHAAhTgEg");
	this.shape_2.setTransform(89.2,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pied1, new cjs.Rectangle(0,-40.6,178.2,115), null);


(lib.off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag7BdIAAi5IB3AAIAAAdIhTAAIAAAzIBGAAIAAAbIhGAAIAABOg");
	this.shape.setTransform(42.1,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag8BdIAAi5IB5AAIAAAdIhTAAIAAAzIBFAAIAAAbIhFAAIAABOg");
	this.shape_1.setTransform(27.6,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag3BJQgVgWAAgiIAAggQAAgjAVgVQAWgXAhAAQAiAAAVAXQAWAVAAAjIAAAgQAAAigWAWQgVAWgiAAQghAAgWgWgAgcgzQgLAOAAAVIAAAhQAAAVALAPQAKAOASgBQATABAKgOQALgPAAgVIAAghQAAgVgLgOQgKgOgTAAQgSAAgKAOg");
	this.shape_2.setTransform(11,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.off, new cjs.Rectangle(0,0,51,34.5), null);


(lib.pied2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#637081").s().p("AtCGyQg/gHgXgSQgRgNgRgqQgNgfgFg6QgCgdAAgWQBSv4OVJBIBeAlQBnAoArANQBGAUA8AeQAUgOApgEQAagCBJAAQAxAAB7gaICegiQAmgGAeAlQAOATAIAUQAAAKgeAeQiWCVi0BGQh4AuiDAaQhZAShuAKQhLAHi9AnQirAjhAATQhDATiwAbQihAZhGAAIgagBg");
	this.shape_3.setTransform(97.5,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AuiEuIgogUIAAiMIdZnPIAaASQAaAUAGAGQAIAIgZAkQgbAlgkAdQi5CVivA8Qi9BDktAXQhSAHijAtQhlAbhdAfQgzARicAfQinAgg4AAQgyAAgygUg");
	this.shape_4.setTransform(102.1,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404040").s().p("AuiEuIgogUIAAiMIdZnPIAaASQAaAUAGAGQAIAIgZAkQgbAlgkAdQi5CVivA8Qi9BDktAXQhSAHijAtQhlAbhdAfQgzARicAfQinAgg4AAQgyAAgygUg");
	this.shape_5.setTransform(102.1,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pied2_1, new cjs.Rectangle(0,-20.8,199.2,98.9), null);


(lib.pied1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#637081").s().p("ABWH+QiBgTjBhbQi2hfgjgPQi7hQiFgyQh0gsAQguQAKgeAeipQF2s2JnNKIAnAzQAvA6AsAeQAjAZBKA9QBKA5BXAlICgBGQBAAcAkAMQA8AUAABaQAAAMhEAUIisAwQhcAaiJAAQiKAAi3gag");
	this.shape_3.setTransform(87.6,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADwEHQidgGh7glQg8gShtgxQhkgvhFgeQh+g3h9glQh9glhQg3QgZgRgSgRIgMgOIAIhPIAqgfIaPFJIAyA8QAAAKgOARQgbAghFAfQhOAkiPAMQhIAGhdAAQhHAAhTgEg");
	this.shape_4.setTransform(89.2,45.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404040").s().p("ADwEHQidgGh7glQg8gShtgxQhkgvhFgeQh+g3h9glQh9glhQg3QgZgRgSgRIgMgOIAIhPIAqgfIaPFJIAyA8QAAAKgOARQgbAghFAfQhOAkiPAMQhIAGhdAAQhHAAhTgEg");
	this.shape_5.setTransform(89.2,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pied1_1, new cjs.Rectangle(0,-40.6,178.2,115), null);


(lib.Interpoler1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322A28").s().p("AAXDwQhDhlhWiLIhJh2IA9hGQA8hSAAg9QgBhhAGgRQAzCGA7CrQB4FUArC1QAQBBgSAAQggAAiLjOg");
	this.shape.setTransform(77.5,-65.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#322A28").s().p("EgLzAj+QhCgUgfgXIgRgUIgYk3QgZllgFjpQgEiShcmMQiAorgljFQhWnXAFldQAGm5CVktQDvnjFHjlQBmhJBiglQAxgUAdgEIDrC5QD8DJBXBPQCNCBGUGqQA6BLBGCOQCMEeA+FRQBKGRAJJFQAII9g9EwQgyD6gtExIgjD/QhaAyi7AyQl3BknnAAQnnAAjUg/g");
	this.shape_1.setTransform(-2.7,76.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EA7D2").s().p("AhdAFIl2lmIDkCiQDwCuA+A3IEYD6IAhgsQAjg0AMgsQAIAMAJAUQARAoAGAmQAHAlgDAZIgEASIgyhaQhRBcgeAOIgBAAQgaAAlwldg");
	this.shape_2.setTransform(18.8,-123.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7EEFE").s().p("AgcCwQi2jNjVkKIixjhIBaiqIBDAZQBSAfBOAkQD6BwBwBqQBwBrBBBIQAhAkAKAPIAyhQQARAjANA5QAZBwgZBpQgOA8AjBXQAYA7A8BkQBHB1AQAgQAmBMgKAnQgKAqglAAQiAAAnEoDg");
	this.shape_3.setTransform(30.8,-104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Calque 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E89C82").s().p("AAfCKQghgdgLg/QgKg3AXgoQAGgKAKgOQAGgKgDgGQgIgRgXgOQgbgQgVAHQgSAHAHA+IALA8IgVg9QgRhBASgNQAZgQAoAEQArAEAVAcQAWAeACAOQACANgQAXQgOAWAEAlQAEAkAQAYQARAZADASQAEAUgOAHQgGADgHAAQgPAAgUgPg");
	this.shape_4.setTransform(0,-208.7,1,1,-6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E89C82").s().p("AghA2IgSgDQBEgEAYgzQAMgZgCgZQAIBXg3ASQgLAEgPAAIgLgBg");
	this.shape_5.setTransform(74.9,-225.7,1,1,-6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E89C82").s().p("AgeADQgTgXAWAAIAxAAQAbAAgOARQgLAMgWAKQgCACgEAAQgMAAgOgSg");
	this.shape_6.setTransform(101.9,-179.8,1,1,-6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E89C82").s().p("AhIADQBCgTALAAQAGAAAdAJQAXAHAMgGIAegPQARgFANAUQgUAAgUAJQgMAGgZgCIg1gEQgYAAg8AKIg3AKg");
	this.shape_7.setTransform(96.4,-189.6,1,1,-6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E89C82").s().p("ABeBLQjigPidiIIB9A9QCRA+BjAGQCgAKAyAAQg8AOhMAAQgdAAgfgCg");
	this.shape_8.setTransform(72.3,-160.4,1,1,-6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E89C82").s().p("AAKgTQgXgBgjAdIgfAfIATgoQAagnAnAAQAoAAAWAnQALAUACAUQgRg7g1AAg");
	this.shape_9.setTransform(69.2,-235.3,1,1,-6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#322A28").s().p("AgZAjQgLgOAAgVQAAgUALgPQALgOAOAAQAQAAAKAOQALAPAAAUQAAAVgLAOQgKAPgQAAQgOAAgLgPg");
	this.shape_10.setTransform(72.6,-233.7,1,1,-6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7EEFE").s().p("AhPARIAgggQAlghAaAGQAaAHAWAbQAKANAGAMQgTAPgdAIQgRAEgPAAQgpAAgmgbg");
	this.shape_11.setTransform(69.5,-233,1,1,-6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0B9B3").s().p("AgHAeIg+AAIACgbQAFgdAVgNQAhgTAeAQQAoAUAIBIQgtgUggAAg");
	this.shape_12.setTransform(99,-255.1,1,1,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D0B9B3").s().p("AgngqQA3gQA7ATQAmANAKAdIACAbIhuAAQgkAAg3AKIgwAKQAOhIBHgUg");
	this.shape_13.setTransform(69.6,-252.5,1,1,-6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E89C82").s().p("AhrCkQgYgVgHicQgGidAXgFQA6gLBuB7QAuAzAaAuQAcAygJAWQgSAshnATQgqAIgeAAQglAAgPgNg");
	this.shape_14.setTransform(102.8,-223.9,1,1,-6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FAB99B").s().p("AAMDeQgkglgzhYQg5hhgLhlQgNh7BRgZQBKgXBJAzQAlAZAWAeIAOFJQACASgGAUQgLAqgiAMQgJADgJAAQgfAAgjgkg");
	this.shape_15.setTransform(1.3,-204.4,1,1,-6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C4AEAB").s().p("AoTJiQghg2gbhDQhUjXANkNQAOkhB/iJQA1g6BUgrQA3gdBvgrQCeg7D6AEQDEAEB3AfQBJAUA0BdQASAhAKAgQAJAdgDAGQgCAFiCgvQiOgzgoAAQhugJhIgBQiJgBgqApQgSASAcBBQAnBaACAHQAJArgWBVQgYBcgjAUQggATg7BNIg1BJQgbB1gnB4QhPDwg/ASQgeAKgwALIgqAJQgLgNgQgbg");
	this.shape_16.setTransform(26.7,-241.2,1,1,-6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E89C82").s().p("AAwgEQgPgPgYAAQgTgBggAdIgbAfIARgoQAXgnAhAAQAkAAASAnQAKAUACAUQgHgegPgOg");
	this.shape_17.setTransform(99,-238.9,1,1,-6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#322A28").s().p("AgWAjQgKgOAAgVQAAgUAKgPQAJgOANAAQAOAAAJAOQAKAPAAAUQAAAVgKAOQgJAPgOAAQgNAAgJgPg");
	this.shape_18.setTransform(102,-237.3,1,1,-6.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7EEFE").s().p("AhFARIAcggQAgghAXAGQAXAHATAbQAJANAFAMQgQAPgaAIQgPAEgNAAQgkAAghgbg");
	this.shape_19.setTransform(99.2,-236.7,1,1,-6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAB99B").s().p("ArCHEIAOgfQARgoALgpQAkiBgghYQgSg0gEh9QgEh9ANiPQAeldBThpQBVhpEbg+QEEg5C1AYQCOAUBXBnQA5BEAOBFQAPBLAKAoQAXBcAgBTQAgBTgKAjQgEALgLAMIgRATQgGAKAGAGQAEAFASALQApAeARBEQASBJgVDxQgbD1AAAoQAAAygeAeIlhCuQhYA+hZBtIhIBgg");
	this.shape_20.setTransform(44,-206.9,1,1,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.3,-309.1,253.4,621.9);


(lib.Bras2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EA7D2").s().p("AKEcUQhJgQh4hIQiOhUiMh9Ql3lOjBnJQhSjCiflVQi2mFg5iCQj8o8AdizQAdisAMg6QAciGAnhcQBojyDYggQBIgLBoAlQBsAmBkBKQD1C3AlD+QAoEcBaGBQBeGQBWD5QBlEkD9HNQEXH9CrCZQhJBYhfBTQimCThlAAQgPAAgMgDg");
	this.shape.setTransform(110.6,181.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB99B").s().p("AGhEKIhyiBQg5hChTg4QhXg7AHAqQAHAmA/BLQAkApBABBQAlAlgbAlQgZAkg3AAQgtAAhOg4QgbgThZhLQgVgShUgdQhWgfhPg+QhXhDgtiFQgXhCgEg1IENhpIDYCsQDtC+BqBdQBqBfAdB6QAIAmAAAkIgBAdQgFgtg/hNg");
	this.shape_1.setTransform(237.6,369);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E89C82").s().p("ADOH+IgfgUQgPAPgZAJQgxASgwgfQgLgHgkAAQghABgMgPQgHgIgEgXIgHgwQgOhJgugvQgvgxhqh7Qh2iJgggxQgdgsgUhlQgKgygEgpIE0jYIByBhQB8BpA7ApQCsB3A/BKQAyA7AqA+QA6BZAGAyQAHA4gaCIQgaCHgUARQgUASghgUQghgUADgjQgEATgLATQgXAmglAAQggAAglgUg");
	this.shape_2.setTransform(236.4,383.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bras2, new cjs.Rectangle(0,0,286.4,436.7), null);


(lib.bras1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7EEFE").s().p("AHaepQhJgah0hZQiJhpiCiTQldmJiQn0Qg9jTh7l3QiNmrgriOQi/pyA1i2QAzivAUg7QAuiIA0haQCJjvDmgHQBMgCBnAzQBrA1BfBaQDnDcAHEMQAHEsAvGdQAvGqA7EOQBEE8DOH/QDiIzCgC0QhYBThsBLQiuB4hnAAQgaAAgVgIg");
	this.shape.setTransform(99.4,196.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB99B").s().p("AFEI4QgggZAHgkQgGAQgSAQQgjAhg4AAQg4AAgSgeQgFgKgBgLIAAgJQgXAMgcAHQg3AOgcgcQgLgKgyAIQgxAIgKgQQgJgNgChcQgDhhgQgmQgQglhzikQh4iqgTgmQgZgygJhqQgEg2ABgrIFbi7IBqBzQB1B9A4AyQCjCRA5BVQAtBCAjBGQAyBkAAA1QAAA7gsCKQgrCKgXAPQgKAGgKAAQgQAAgTgPg");
	this.shape_1.setTransform(208.9,423.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bras1, new cjs.Rectangle(0,0,257.8,481.7), null);


(lib.Bras2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9EA7D2").s().p("AKEcUQhJgQh4hIQiOhUiMh9Ql3lOjBnJQhSjCiflVQi2mFg5iCQj8o8AdizQAdisAMg6QAciGAnhcQBojyDYggQBIgLBoAlQBsAmBkBKQD1C3AlD+QAoEcBaGBQBeGQBWD5QBlEkD9HNQEXH9CrCZQhJBYhfBTQimCThlAAQgPAAgMgDg");
	this.shape_3.setTransform(110.6,181.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAB99B").s().p("AGhEKIhyiBQg5hChTg4QhXg7AHAqQAHAmA/BLQAkApBABBQAlAlgbAlQgZAkg3AAQgtAAhOg4QgbgThZhLQgVgShUgdQhWgfhPg+QhXhDgtiFQgXhCgEg1IENhpIDYCsQDtC+BqBdQBqBfAdB6QAIAmAAAkIgBAdQgFgtg/hNg");
	this.shape_4.setTransform(237.6,369);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E89C82").s().p("ADOH+IgfgUQgPAPgZAJQgxASgwgfQgLgHgkAAQghABgMgPQgHgIgEgXIgHgwQgOhJgugvQgvgxhqh7Qh2iJgggxQgdgsgUhlQgKgygEgpIE0jYIByBhQB8BpA7ApQCsB3A/BKQAyA7AqA+QA6BZAGAyQAHA4gaCIQgaCHgUARQgUASghgUQghgUADgjQgEATgLATQgXAmglAAQggAAglgUg");
	this.shape_5.setTransform(236.4,383.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bras2_1, new cjs.Rectangle(0,0,286.4,436.7), null);


(lib.bras1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7EEFE").s().p("AHaepQhJgah0hZQiJhpiCiTQldmJiQn0Qg9jTh7l3QiNmrgriOQi/pyA1i2QAzivAUg7QAuiIA0haQCJjvDmgHQBMgCBnAzQBrA1BfBaQDnDcAHEMQAHEsAvGdQAvGqA7EOQBEE8DOH/QDiIzCgC0QhYBThsBLQiuB4hnAAQgaAAgVgIg");
	this.shape_2.setTransform(99.4,196.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB99B").s().p("AFEI4QgggZAHgkQgGAQgSAQQgjAhg4AAQg4AAgSgeQgFgKgBgLIAAgJQgXAMgcAHQg3AOgcgcQgLgKgyAIQgxAIgKgQQgJgNgChcQgDhhgQgmQgQglhzikQh4iqgTgmQgZgygJhqQgEg2ABgrIFbi7IBqBzQB1B9A4AyQCjCRA5BVQAtBCAjBGQAyBkAAA1QAAA7gsCKQgrCKgXAPQgKAGgKAAQgQAAgTgPg");
	this.shape_3.setTransform(208.9,423.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bras1_1, new cjs.Rectangle(0,0,257.8,481.7), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.tetecorps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Interpoler1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(74.9,178.7,0.571,0.571,6.2,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tetecorps, new cjs.Rectangle(0.2,6.1,155,351.2), null);


(lib.marchenon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bras
	this.instance = new lib.bras1();
	this.instance.parent = this;
	this.instance.setTransform(-22.7,-204.3,0.571,0.571,22.2,0,0,44.9,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-192.8},7).wait(9).to({y:-204.3},9).wait(1));

	// tete corps
	this.instance_1 = new lib.tetecorps();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.6,-164.1,1,1,0,0,0,70.9,178.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-152.7},7).wait(9).to({y:-164.1},9).wait(1));

	// Calque 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7EEFE").s().p("EgCgAhzQlngGAXixQCFtXBLoSQAejYAMhjQAGh/gHjIQgGjAgRjSQgQjJgZimQgYibgfhBQg9hwhXiUQhDiTAZiuQAuisB6i+QCKijErgUQGjAJBgILQhBWfgcGwIgFBDQgNClhrMFQhjLOAEAmQgyChlOAAIgbAAg");
	this.shape.setTransform(-0.3,99.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7EEFE").s().p("EgDjAhxQlngNAaiwQCUtVBUoRQAijXAOhjQAIiAgDjIQgDi/gMjTQgNjJgVimQgWicgehBQg7hxhUiWQhAiUAciuQAxirB+i8QCNigErgPQGjASBWIMQhbWeglGwIgGBCQgQCjh4MFQhvLLACAnQgyCbk5AAIgygBg");
	this.shape_1.setTransform(-0.4,101);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7EEFE").s().p("EgEIAhuQlngUAeivQCitTBdoPQAmjXAQhjQAKh/ABjIQABi/gIjTQgJjKgTimQgSicgdhCQg5hyhRiYQg+iVAgitQA0iqCCi5QCPifEsgIQGiAZBMIOQh2WbgsGvIgIBDQgTCjiFMCQh8LJACAnQg0CUklAAQgiAAglgBg");
	this.shape_2.setTransform(-3.6,102.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7EEFE").s().p("EgEsAhpQlmgZAhiwQCxtPBmoNQAqjWARhkQANh+AFjIQAEjAgEjTQgFjKgQimQgQidgbhCQg3hzhOiZQg7iXAjisQA3ipCFi3QCSicEsgDQGiAhBDIPQiRWag1GuIgIBCQgWChiTMBQiILGABAnQg1CQkUAAQgqAAgwgEg");
	this.shape_3.setTransform(-6.8,104.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7EEFE").s().p("EgFPAhkQlmggAkivQDAtMBwoLQAtjVAThkQAPh/AJjHQAIjAgBjTQgBjKgNimQgMidgahDQg1h0hMibQg4iXAnisQA6ioCJi0QCViZErADQGiAoA4IQQirWXg9GtIgKBCQgYCgihL/QiULDAAAnQg1CKkEAAQgyAAg6gFg");
	this.shape_4.setTransform(-10.1,106.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7EEFE").s().p("EgFyAheQlmgmAoiuQDOtIB4oKQAyjUAVhkQARh+AMjIQAMi/ADjTQADjKgJimQgKiegZhDQgzh1hIicQg2iYAqirQA9inCMiyQCYiWEsAIQGhAxAuIRQjGWThFGsIgLBCQgcCeiuL9QigLAAAAnQg1CEj1AAQg5AAhEgHg");
	this.shape_5.setTransform(-13.4,108.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7EEFE").s().p("EgGVAhXQllgsAqitQDetFCBoHQA1jUAXhjQAUh+AQjHQAPjAAHjTQAGjJgGinQgHiegXhDQgxh2hGidQgyiaAtiqQBAimCQivQCaiTEsAOQGfA4AlISQjhWPhNGrIgMBCQgeCci8L7QisK8gBAoQg1B/jnAAQhAAAhNgKg");
	this.shape_6.setTransform(-16.7,110.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7EEFE").s().p("EgG4AhQQlkgyAuisQDstBCKoFQA4jTAZhjQAWh+AUjHQASi/AMjSQAKjKgDinQgEidgWhFQgvh2hCifQgwiaAwipQBEilCSitQCciQEtAUQGeBAAbISQj7WLhWGpIgNBCQghCbjJL3Qi3K5gCApQg3B5jaAAQhGAAhVgMg");
	this.shape_7.setTransform(-20,111.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7EEFE").s().p("EgG7AhLQljg5AxirQD9s8CVoCQA9jSAYhWQAUh+AQjHQAPi/AHjTQAGjKgGimQgHiegXhEQgxh2hGidQgyiaAtiqQBAimCQivQCZiSEtANQGfA4AlISQjhWQhNGqIgMBCQghCvjYLnIiOHsQg5DJgHAvQg3B0jNAAQhLAAhfgQg");
	this.shape_8.setTransform(-19.8,111.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7EEFE").s().p("EgG+AhGQlihBA0irQEPs2Cfn/IBZkZQASh+AMjHQALjAAEjTQACjKgJimQgKiegZhDQgyh1hJicQg1iZApiqQA+inCMiyQCXiWEsAIQGhAxAuIRQjGWThEGsIgLBCQggC2jpLjIicHuQg+DKgJAuQg4BvjBAAQhQAAhngTg");
	this.shape_9.setTransform(-19.6,111);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7EEFE").s().p("EgHBAhAQlghJA4ipQEfsxCqn7QAjhnAag3QAYg8AIgwQAPh/AJjIQAHi/AAjTQgCjKgMimQgMiegbhDQg1hzhLibQg4iYAmirQA7ioCIi1QCViYEsACQGhApA4IQQirWWg9GuIgJBCQgdC7j7LhIiqHvQhEDKgKAuQg4Bri2AAQhUAAhwgXg");
	this.shape_10.setTransform(-19.5,110.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7EEFE").s().p("EgHEAg4QlehPA7ioQEvsrC1n3QAlhnAcgvQAZg3AHgvQANh/AEjHQAEjAgEjTQgFjKgQimQgQidgbhCQg2hzhPiZQg6iXAjisQA3ipCFi3QCSicErgDQGiAhBDIPQiRWag1GuIgIBCQgZC+kNLgQhmEUhTDcQhKDLgKAuQg4BmirAAQhZAAh4gcg");
	this.shape_11.setTransform(-19.3,109.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7EEFE").s().p("EgHGAgxQldhYA+imQFBskC/n0QAnhmAdgoQAagyAHgtQAKh/ABjIQAAi/gIjTQgJjKgTimQgSicgdhCQg5hyhRiYQg+iVAgitQA0iqCCi5QCPieErgJQGjAZBMIOQh1WbgtGwIgHBCQgWDAkgLgQhsEVhZDcQhQDLgMAuQg4BhiiAAQhdAAh+gfg");
	this.shape_12.setTransform(-19.1,109.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7EEFE").s().p("EgHJAgnQlbheBCilQFRsdDKnwQAphlAegiQAcgrAFgsQAIh/gDjIQgDi/gMjTQgNjJgVimQgWicgehCQg7hwhUiXQhBiUAditQAxirB+i8QCMihErgOQGjARBWIMQhaWeglGwIgGBDQgTDBkxLgQhzEVhgDdQhWDLgOAuQg4BdiYAAQhgAAiGglg");
	this.shape_13.setTransform(-18.9,108.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7EEFE").s().p("EgHLAgeQlZhlBFikQFisWDTnsQAshkAfgaQAdgnAEgpQAGh/gHjIQgGjAgRjSQgQjJgZimQgYibgfhBQg+hwhXiUQhDiTAaiuQAtisB7i+QCJikErgUQGjAKBgIKQhAWggcGwIgFBDQgPDClELhQh6EVhmDcQhcDMgPAuQg4BYiQAAQhjAAiMgpg");
	this.shape_14.setTransform(-18.7,107.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7EEFE").s().p("EgHNAgTQlXhsBJijQFysPDdnnQAuhkAggSQAfghADgoQADh/gKjJQgKi/gVjSQgUjIgcilQgbibgghBQhAhuhaiTQhFiRAWivQAqisB3jBQCGimErgZQGjABBqIJQglWggUGxIgEBCQgLDElXLgQiBEVhsDdQhhDMgRAuQg4BUiIAAQhmAAiSgug");
	this.shape_15.setTransform(-18.5,106.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7EEFE").s().p("EgHOAgHQlVhzBMihQGCsHDoniQAvhjAhgLQAfgcADgmQAAh/gNjJQgNi+gZjSQgXjIggikQgeibghg/QhChthciRQhJiRATiuQAniuBzjDQCDioErgfQGjgHBzIHQgKWggMGyIgCBCQgIDFlpLfQiIEWhzDcQhmDMgSAtQg4BQiBAAQhoAAiXgzg");
	this.shape_16.setTransform(-18.3,106);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7EEFE").s().p("EgGxAgZQlZhoBHikQFmsTDYnqQArhkAhgTQAdgiAEgnQABiAgNjIQgNi/gYjRQgXjJgeikQgeibghhAQhBhthciSQhIiQAUivQAoitB0jCQCEioEqgeQGjgFBxIHQgQWhgNGxIgDBDQgJDElMLkQh+EXhpDeQhgDOgPAuQg3BXiOAAQhjAAiOgrg");
	this.shape_17.setTransform(-16.1,105.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7EEFE").s().p("EgGUAgpQlbhbBAimQFMsgDGnxQAphlAegbQAcgnADgpQACiAgMjHQgMjAgXjRQgWjJgdikQgdibghhAQhBhuhbiSQhIiRAViuQAoitB1jCQCEinErgdQGjgDBvIHQgWWhgPGxIgDBDQgKDDkwLpQhyEZhhDfQhWDOgOAuQg3BeicAAQheAAiEgjg");
	this.shape_18.setTransform(-13.9,105);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7EEFE").s().p("EgF3Ag4QlehPA7ioQEwsrC1n3QAlhnAdgiQAagtAEgrQACh/gMjIQgLi/gWjSQgVjJgdikQgcibghhAQhAhuhbiTQhGiRAViuQApitB2jCQCFimEqgcQGkgBBsIIQgbWhgSGxIgDBCQgLDDkTLsQhoEahXDgQhODPgMAuQg4BmiqAAQhZAAh4gcg");
	this.shape_19.setTransform(-11.6,104.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7EEFE").s().p("EgFZAhGQlhhEA2iqQEUs0Cjn+QAihoAagpQAZgyADgtQADh/gLjIQgKi/gVjSQgVjJgcilQgbibghhAQg/huhaiTQhGiRAVivQAqitB3jAQCGimEqgbQGkABBqIIQgiWggUGxIgCBDQgMDBj3LwQhdEahNDhQhGDPgKAvQg4Bui7AAQhSAAhrgVg");
	this.shape_20.setTransform(-9.2,103.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7EEFE").s().p("EgE7AhSQljg3AwisQD4s9CSoDQAehpAYgwQAWg4AEgvQADh/gKjIQgKjAgTjSQgUjIgcilQgaibghhBQg/huhZiTQhGiSAXiuQAritB3jAQCGimErgZQGkADBoIIQgoWhgWGwIgDBDQgMDAjbLxQhSEbhEDhQg9DQgIAvQg3B2jRAAQhJAAhcgPg");
	this.shape_21.setTransform(-6.9,102.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7EEFE").s().p("EgEcAhdQllgrAqitQDbtGCBoIQAahpAVg4QAUg9AEgxQAEh/gKjIQgIi/gTjTQgTjIgbilQgaicgghAQg/hvhZiTQhFiSAYiuQAritB4jAQCIilEqgXQGkAEBmIJQguWggXGxIgEBCQgNC+i+L0IiBH7Qg1DQgGAvQg3B/jnAAQg/AAhMgJg");
	this.shape_22.setTransform(-4.5,102);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7EEFE").s().p("EgD+AhmQlmgfAkivQC+tMBvoMQAtjVAQhJQAFh/gIjIQgIjAgSjSQgSjJgaikQgaicgghBQg+hvhYiUQhEiSAYiuQAsisB5i/QCIilErgWQGjAFBkIKQg0WggZGxIgEBCQgNC6iiL2IhtH7QgsDPgFAvQg0CKkEAAQgyAAg6gFg");
	this.shape_23.setTransform(-2,101.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7EEFE").s().p("EgDXAhuQlngTAdiwQCitSBdoPIA0ktQAFh/gHjIQgHjAgSjSQgRjJgZilQgZicgghBQg+hvhXiUQhEiTAZiuQAtisB6i+QCIikErgVQGkAHBiIKQg7WggbGwIgEBDQgNC0iGL6IhZH5QgjDPgDAvQgzCUkmAAQghAAglgBg");
	this.shape_24.setTransform(-0.3,100.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// pied
	this.instance_2 = new lib.pied1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30.4,340.3,0.571,0.571,-8.2,0,0,36.4,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-71.5,y:338.3},7).to({rotation:6.8,y:325.7},9).to({rotation:-8.2,x:-30.4,y:340.3},9).wait(1));

	// Calque 1 copy
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9EA7D2").s().p("AlhbaQB+yqAEkiIABgsQADg+gqkjQgmkNg0lnQgvlQggkfQgbkIAUhNQAZg2B8gQQBygQCbAYQCRAZCABEQB2BFAqBzQAATfALDZQACAiAKBUQAIBOABBgQgCCogTDlQgSDcgVDkQgTDcgKCvQgHCmAPBFQk7BFi7AAQiTAAhFgqg");
	this.shape_25.setTransform(17.6,137.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9EA7D2").s().p("AkjbcQBlyrgEkhIAAgtQACg+g0khQgtkLhAllQg5lOgpkeQgjkHARhOQAXg2B8gUQBygUCbAUQCSAVCBBAQB5BBAuBxQAmTeASDZQADAiANBUQAKBPAEBfQACCpgODlQgNDdgQDlQgPDcgGCvQgECnARBEQlLBRi+AAQiDAAhBgmg");
	this.shape_26.setTransform(19.4,137.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9EA7D2").s().p("AjlbdQBMyrgMkiIgBgsQAAg/g8kfQg2kJhLliQhElMgykcQgqkGAOhOQAWg3B6gYQBygXCcAPQCSAPCEA9QB6A9AxBwQBMTdAaDXQADAiAQBUQANBQAHBfQAGCogJDnQgHDcgMDmQgKDdgCCvQgBCnATBEQlbBdjAAAQh0AAg9gig");
	this.shape_27.setTransform(21.2,137.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9EA7D2").s().p("AiubdQA0yrgUkhIgCgtQgCg+hFkdQg+kHhWlgQhOlJg7kaQgzkEANhPQATg4B7gbQBwgbCdAKQCSAMCFA4QB8A5A1BvQBzTZAfDXQAFAiATBUQAPBQAJBfQAMCogEDmQgDDegGDmQgFDdABCwQADCnAUBEQlnBojCAAQhoAAg6geg");
	this.shape_28.setTransform(23.7,137);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9EA7D2").s().p("Ah/bdQAbysgbkgIgEgsQgDg+hOkaQhGkGhhlcQhYlHhEkYQg7kCAKhPQASg4B5ggQBwgdCdAFQCTAHCGA0QB+A1A4BtQCZTVAmDWQAGAiAWBUQARBQANBfQAPCoABDmQADDegCDmQAADeAFCwQAHCnAVBDQlzB1jEAAQhcAAg2gag");
	this.shape_29.setTransform(27,136.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9EA7D2").s().p("AhQbbQACyqgjkgIgEgsQgFg+hXkXQhOkDhrlZQhjlDhMkWQhEkAAIhPQAQg5B5gjQBugiCdABQCUACCHAwQCAAyA7BrQC/TQAtDUQAHAiAYBVQAVBPAOBfQAUCnAHDmQAIDeADDnQAEDeAJCwQAKCnAXBDQl+CBjFAAQhSAAgygXg");
	this.shape_30.setTransform(30.2,136.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9EA7D2").s().p("AghbYQgXyqgrkdIgFgsQgHg+hfkVQhWkAh2lVQhtlAhVkTQhLj+AFhPQAPg5B2gnQBuglCdgEQCTgCCJArQCBAuA/BpQDlTKAzDTQAIAhAcBVQAXBPARBfQAYCmAMDmQANDeAIDnQAKDeAMCwQAOCnAYBDQmHCPjEAAQhLAAgugVg");
	this.shape_31.setTransform(33.5,135.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9EA7D2").s().p("AANbUQgvyngykdIgHgsQgIg9hokRQhdj9iBlRQh3k8hdkRQhTj7AChPQANg6B2gqQBsgoCdgJQCTgHCMAnQCBAqBCBnQELTCA5DRQAJAhAeBVQAaBOAUBfQAdClARDnQASDdANDoQAODeAQCwQARCnAaBCQmPCbjFAAQhDAAgrgSg");
	this.shape_32.setTransform(36.7,135);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9EA7D2").s().p("AgIbYQgrypgukeIgHgsQgHg9hjkUQhZj+h7lUQhwk/hYkSQhPj9AEhPQAOg6B2goQBtgmCdgGQCUgFCKAqQCBAsBABpQD1TGA1DSQAJAhAcBVQAYBOATBfQAbCmAPDmQAQDeAMDmQANDeAPCwQAQCnAaBCQmNCYjEAAQhGAAgrgTg");
	this.shape_33.setTransform(35.3,135.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9EA7D2").s().p("AgebbQgmyrgrkeIgGgsQgGg+hekVQhVkBh0lWQhrlBhTkVQhJj+AFhPQAPg5B3gmQBugkCdgEQCTgCCJAtQCBAuA+BqQDeTKAyDUQAIAhAbBUQAWBOARBeQAZCnAODmQAODdALDmQAMDeAOCvQAQCnAZBCQmLCVjFAAQhHAAgsgUg");
	this.shape_34.setTransform(33.9,135.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9EA7D2").s().p("Ag0beQggysgokfIgFgsQgGg+hZkXQhQkDhtlZQhllDhOkWQhFkAAHhPQAQg5B3gkQBugiCegBQCTACCIAuQCAAxA8BrQDITOAvDUQAHAiAYBUQAVBNAQBeQAXCnAMDmQANDdAJDmQALDdANCvQAPCnAZBCQmICRjFAAQhJAAgugVg");
	this.shape_35.setTransform(32.5,136.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9EA7D2").s().p("AhKbhQgbyugkkfIgFgtQgFg+hUkZQhLkEhnlbQhflFhJkYQhAkCAIhPQARg4B5giQBvggCdACQCTAECHAxQB/AzA6BsQCyTSArDVQAGAhAXBTQATBNAOBfQAVCnALDmQALDdAJDlQAJDdANCvQANCmAZBCQmGCNjFAAQhLAAgvgVg");
	this.shape_36.setTransform(31,136.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9EA7D2").s().p("AhgbkQgWywghkgIgEgtQgFg+hOkbQhHkFhhleQhYlHhEkZQg7kDAKhPQASg5B5gfQBvgeCdAFQCTAGCHA0QB9A1A5BtQCbTVAnDWQAGAhAUBSQASBNANBfQATCoAJDlQAKDdAHDlQAIDcAMCvQANCmAYBCQmDCKjFAAQhNAAgwgWg");
	this.shape_37.setTransform(29.6,136.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9EA7D2").s().p("Ah2bnQgRyygdkhIgEgsQgDg+hKkdQhCkHhalgQhTlJg+kbQg2kEALhOQATg4B6geQBwgcCcAIQCUAJCFA2QB9A4A2BuQCFTXAjDXQAFAhATBRQAQBNAMBeQAQCoAIDmQAIDcAGDlQAHDcALCuQAMCmAYBCQmBCGjFAAQhPAAgxgWg");
	this.shape_38.setTransform(28.1,137.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9EA7D2").s().p("AiMbpQgMy0gZkgIgEgtQgDg+hEkfQg9kIhTliQhNlLg5kcQgykFANhPQAUg3B6gcQBxgaCdALQCSAMCFA4QB8A6A0BvQBuTaAfDXQAFAhARBRQAPBMAKBfQAPCoAFDlQAHDcAFDlQAFDbALCuQALClAXBDQl+CCjDAAQhTAAgygXg");
	this.shape_39.setTransform(26.7,137.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9EA7D2").s().p("AiibrQgHy1gWkiIgDgsQgCg/g/kfQg4kKhNlkQhHlNgzkdQgtkGAPhOQAUg4B7gZQBxgYCcAOQCSAOCFA7QB6A8AzBwQBXTcAbDXQAEAiAQBQQAMBMAKBeQANCoAEDlQAFDcADDkQAEDbAKCuQALClAXBDQl8B+jDAAQhVAAgzgYg");
	this.shape_40.setTransform(25.2,137.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9EA7D2").s().p("Ai5btQgBy2gSkiIgDgtQgBg+g6kiIh6pwQhAlOgukfQgokIAQhNQAWg3B7gXQBxgWCcAQQCSARCDA+QB6A+AwBxQBBTdAXDYQAEAiANBOQAMBMAIBeQAKCpADDkIAFG/QAEDbAJCuQAKCkAWBDQl4B7jDAAQhZAAg0gZg");
	this.shape_41.setTransform(23.8,137.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9EA7D2").s().p("AjGbsQAMy3gQkhIgCgtQAAg+g4kiIh3pxQg+lOgtkfQgmkHAQhOQAWg3B7gXQBygVCcASQCRARCDA/QB5A/AwBxQA6TdAWDYQADAiANBPQALBMAIBeQAJCpAADlQABDcAADjQABDbAGCuQAJClAVBDQlzB1jDAAQhdAAg1gag");
	this.shape_42.setTransform(22.6,137.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9EA7D2").s().p("AjVbqQAay1gNkiIgCgtQAAg+g2kiIhzpxQg9lPgrkeQglkIARhOQAWg3B8gVQBxgVCcASQCRATCDA/QB5BAAvBxQAzTeAUDYQADAiANBQQALBMAHBeQAICpgDDlQgBDcgDDkQgBDbAFCuQAGClAVBDQluBvjCAAQhjAAg3gcg");
	this.shape_43.setTransform(21.6,137.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9EA7D2").s().p("AjiboQAny0gLkiIgBgtQAAg+g1kiIhvpxQg6lPgqkfQgjkIARhNQAXg3B7gVQBygUCcATQCRAUCCA/QB5BBAtBxQAtTeASDZQAEAiAMBQQAKBMAHBfQAGCpgFDlIgIHAQgEDbADCuQAEClAUBEQlnBpjCAAQhoAAg5geg");
	this.shape_44.setTransform(20.4,137.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9EA7D2").s().p("AjxbmQA2yygJkjIgBgsQABg/gzkiIhspyQg5lPgokeQgikJAShNQAXg2B7gUQBygUCcAUQCRAVCCBAQB4BBAuByQAkTeATDYQACAjAMBQQAKBNAFBfQAFCpgHDlQgFDcgIDkQgHDbABCvQADClAUBEQliBjjBAAQhuAAg7ggg");
	this.shape_45.setTransform(19.4,137.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9EA7D2").s().p("AkGbkQBDyxgGkiIgBgtQABg+gxkiQgskNg8lmQg3lPgnkfQggkIAShNQAYg3B7gTQBygTCcAVQCRAVCBBCQB4BCAtBxQAdTfARDYQACAiAMBSQAKBNAEBfQAECogKDlQgHDdgLDkQgJDbgBCvQABClATBFQlbBdjAAAQh0AAg9gig");
	this.shape_46.setTransform(19,137.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9EA7D2").s().p("AkbbiQBRywgEkiIAAgsQABg/gvkiQgqkMg7lnQg1lPglkfQgfkIAShNQAYg3B8gSQBygSCcAWQCQAWCCBCQB3BCAsByQAWTfAQDZQACAiAMBRQAJBOADBfQADCogMDmQgKDcgNDkQgLDbgECvQgBCmASBEQlUBXi/AAQh7AAg+gjg");
	this.shape_47.setTransform(18.6,137.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9EA7D2").s().p("AkxbgQBfyvgCkhIAAgtQACg+gtkjQgpkMg5lnQgzlPgjkgQgekIAThNQAYg2B8gSQBygRCcAWQCQAXCBBDQB3BDAsBzQAPTfAODYQACAiALBSQAJBOADBgQABCogPDlQgMDdgPDkQgODbgFCvQgDCmARBEQlNBSi+AAQiBAAhBglg");
	this.shape_48.setTransform(18.3,137.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9EA7D2").s().p("AlGbdQBsysABkiIAAgsQADg/gskiQgnkNg3lnQgxlPgikgQgckIAThNQAZg2B8gRQBygRCbAYQCRAYCABDQB3BEArBzQAHTfANDYQACAiALBTQAIBOADBgQgBCogQDlQgPDdgSDkQgQDbgHCvQgGCmARBEQlFBNi9AAQiJAAhCgog");
	this.shape_49.setTransform(18,137.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9EA7D2").s().p("AlcbbQB6yrADkhQAAgdACgQQADg+grkjQgmkMg0lnQgwlQggkgQgakIAThNQAZg2B8gQQBygQCcAYQCQAZCABEQB2BFAqBzQABTfAMDYQABAiALBUQAIBOABBgQgCCogTDlQgQDdgVDkQgTDbgJCvQgHCmAQBFQk+BHi7AAQiQAAhFgqg");
	this.shape_50.setTransform(17.6,137.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).wait(1));

	// pied
	this.instance_3 = new lib.pied2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16,328.7,0.571,0.571,8.7,0,0,45.8,26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:1.5,x:77.6,y:324.5},7).to({rotation:16.5,x:50.6,y:326.9},9).to({rotation:8.7,x:16,y:328.7},9).wait(1));

	// bras
	this.instance_4 = new lib.Bras2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34.3,-199.5,0.57,0.57,36.1,0,0,51.3,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-188.1},7).wait(9).to({y:-199.5},9).wait(1));

	// sol
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9EA7D2").s().p("AvJBLIgggDQlxgeAAgqQAAgrGRgfQGSgfI3AAQI4AAGSAfQGRAfAAArQAAAqlxAeIggADQmSAfo4AAQo3AAmSgfg");
	this.shape_51.setTransform(22.4,345.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.1,-342.2,282.7,713.6);


(lib.Interpoler1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.truc();
	this.instance.parent = this;
	this.instance.setTransform(-5.9,-204.8,1,1,0,0,0,21.4,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Calque 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#322A28").s().p("AAXDwQhDhlhWiLIhJh2IA9hGQA8hSAAg9QgBhhAGgRQAzCGA7CrQB4FUArC1QAQBBgSAAQggAAiLjOg");
	this.shape_21.setTransform(77.5,-65.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#322A28").s().p("EgO5AiAQh4g8hfhHIhHg7IBrmlQBvnUASjoQAKh2gZlZQgPjMgpnlQhMu8A5j7QA/kTF3lFQC7ijCvhrIDrC5QD8DJBXBPQCNCBGUGqQA6BLBGCOQCMEeA+FRQBKGRAJJFQAII9g9EwQgyD6gtExIgjD/QhaAyi7AyQl3BknnAAQnnAAl/i9g");
	this.shape_22.setTransform(0,76.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9EA7D2").s().p("AhdAFIl2lmIDkCiQDwCuA+A3IEYD6IAhgsQAjg0AMgsQAIAMAJAUQARAoAGAmQAHAlgDAZIgEASIgyhaQhRBcgeAOIgBAAQgaAAlwldg");
	this.shape_23.setTransform(18.8,-123.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7EEFE").s().p("AgcCwQi2jNjVkKIixjhIBaiqIBDAZQBSAfBOAkQD6BwBwBqQBwBrBBBIQAhAkAKAPIAyhQQARAjANA5QAZBwgZBpQgOA8AjBXQAYA7A8BkQBHB1AQAgQAmBMgKAnQgKAqglAAQiAAAnEoDg");
	this.shape_24.setTransform(30.8,-104.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E89C82").s().p("AAfCKQghgdgLg/QgKg3AXgoQAGgKAKgOQAGgKgDgGQgIgRgXgOQgbgQgVAHQgSAHAHA+IALA8IgVg9QgRhBASgNQAZgQAoAEQArAEAVAcQAWAeACAOQACANgQAXQgOAWAEAlQAEAkAQAYQARAZADASQAEAUgOAHQgGADgHAAQgPAAgUgPg");
	this.shape_25.setTransform(-4.8,-218.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E89C82").s().p("AghA2IgSgDQBEgEAYgzQAMgZgCgZQAIBXg3ASQgLAEgPAAIgLgBg");
	this.shape_26.setTransform(71.7,-226.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E89C82").s().p("AgeADQgTgXAWAAIAxAAQAbAAgOARQgLAMgWAKQgCACgEAAQgMAAgOgSg");
	this.shape_27.setTransform(92.9,-177.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E89C82").s().p("AhIADQBCgTALAAQAGAAAdAJQAXAHAMgGIAegPQARgFANAUQgUAAgUAJQgMAGgZgCIg1gEQgYAAg8AKIg3AKg");
	this.shape_28.setTransform(88.7,-188);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E89C82").s().p("ABeBLQjigPidiIIB9A9QCRA+BjAGQCgAKAyAAQg8AOhMAAQgdAAgfgCg");
	this.shape_29.setTransform(61.2,-162);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E89C82").s().p("AAKgTQgXgBgjAdIgfAfIATgoQAagnAnAAQAoAAAWAnQALAUACAUQgRg7g1AAg");
	this.shape_30.setTransform(67.2,-236.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#322A28").s().p("AgZAjQgLgOAAgVQAAgUALgPQALgOAOAAQAQAAAKAOQALAPAAAUQAAAVgLAOQgKAPgQAAQgOAAgLgPg");
	this.shape_31.setTransform(70.3,-234.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E7EEFE").s().p("AhPARIAgggQAlghAaAGQAaAHAWAbQAKANAGAMQgTAPgdAIQgRAEgPAAQgpAAgmgbg");
	this.shape_32.setTransform(67.2,-234.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D0B9B3").s().p("AgHAeIg+AAIACgbQAFgdAVgNQAhgTAeAQQAoAUAIBIQgtgUggAAg");
	this.shape_33.setTransform(99.2,-252.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D0B9B3").s().p("AgngqQA3gQA7ATQAmANAKAdIACAbIhuAAQgkAAg3AKIgwAKQAOhIBHgUg");
	this.shape_34.setTransform(69.7,-253.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E89C82").s().p("AhrCkQgYgVgHicQgGidAXgFQA6gLBuB7QAuAzAaAuQAcAygJAWQgSAshnATQgqAIgeAAQglAAgPgNg");
	this.shape_35.setTransform(99.1,-221.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FAB99B").s().p("AAMDeQgkglgzhYQg5hhgLhlQgNh7BRgZQBKgXBJAzQAlAZAWAeIAOFJQACASgGAUQgLAqgiAMQgJADgJAAQgfAAgjgkg");
	this.shape_36.setTransform(-4,-214.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C4AEAB").s().p("AoTJiQghg2gbhDQhUjXANkNQAOkhB/iJQA1g6BUgrQA3gdBvgrQCeg7D6AEQDEAEB3AfQBJAUA0BdQASAhAKAgQAJAdgDAGQgCAFiCgvQiOgzgoAAQhugJhIgBQiJgBgqApQgSASAcBBQAnBaACAHQAJArgWBVQgYBcgjAUQggATg7BNIg1BJQgbB1gnB4QhPDwg/ASQgeAKgwALIgqAJQgLgNgQgbg");
	this.shape_37.setTransform(25.6,-247.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E89C82").s().p("AAwgEQgPgPgYAAQgTgBggAdIgbAfIARgoQAXgnAhAAQAkAAASAnQAKAUACAUQgHgegPgOg");
	this.shape_38.setTransform(97.2,-236.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#322A28").s().p("AgWAjQgKgOAAgVQAAgUAKgPQAJgOANAAQAOAAAJAOQAKAPAAAUQAAAVgKAOQgJAPgOAAQgNAAgJgPg");
	this.shape_39.setTransform(99.9,-234.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E7EEFE").s().p("AhFARIAcggQAgghAXAGQAXAHATAbQAJANAFAMQgQAPgaAIQgPAEgNAAQgkAAghgbg");
	this.shape_40.setTransform(97.2,-234.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAB99B").s().p("ApPGPIgVhiQgchzgfhXQgTg0gEh+QgDh9AMiOQAeleBUhoQBUhqEbg+QEFg5C1AZQCOATBXBnQA5BFAOBFQAPBLAKAoQAXBbAgBUQAgBTgLAiQgEAMgKALIgRAUQgHAKAHAGQAEAEARALQAqAfARBEQASBIgWDyQgaD1AAAoQAAAygeAeIk2DcQhYA+gZBuQgIAjAAAjIABAcg");
	this.shape_41.setTransform(39.9,-209.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.9,-312.7,248,625.6);


(lib.corps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.5,1,1).p("ABLAAQAAAJgGAGQgGAGgJAAQgJAAgHgGQgGgGAAgJQAAgIAGgHQAHgFAJAAQAJAAAGAFQAGAHAAAIgAgfAAQAAAJgHAGQgGAGgJAAQgJAAgGgGQgGgGAAgJQAAgIAGgHQAGgFAJAAQAJAAAGAFQAHAHAAAIg");
	this.shape.setTransform(73.7,349.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009933").s().p("AgPAPQgFgGgBgJQABgIAFgHQAHgFAIgBQAJABAGAFQAGAHAAAIQAAAJgGAGQgGAGgJAAQgIAAgHgGg");
	this.shape_1.setTransform(79.1,349.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgOAPQgHgGABgJQgBgIAHgHQAGgFAIgBQAJABAGAFQAGAHABAIQgBAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_2.setTransform(68.3,349.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Calque 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F7FF").s().rr(-16,-9.5,32,19,2.7);
	this.shape_3.setTransform(73.7,349.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Calque 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFD3E9").s().rr(-16,-9.5,32,19,2.7);
	this.shape_4.setTransform(73.7,350.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Calque 1
	this.instance = new lib.Interpoler1_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.9,178.7,0.571,0.571,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.corps, new cjs.Rectangle(0.1,0,141.7,359.9), null);


(lib.bouton2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// on
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,68,68,0.498)").s().p("AAmBdIhKh8IgBAAIAAB8IglAAIAAi5IAlAAIBKB8IABAAIAAh8IAlAAIAAC5g");
	this.shape.setTransform(112,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(68,68,68,0.498)").s().p("Ag3BJQgVgWAAgjIAAgfQAAgjAVgWQAVgWAiAAQAiAAAVAWQAWAWAAAjIAAAfQAAAjgWAWQgVAWgiAAQgiAAgVgWgAgcgzQgLANAAAWIAAAgQAAAXALANQAKAOASABQATgBAKgOQALgNAAgXIAAggQAAgWgLgNQgLgOgSAAQgTAAgJAOg");
	this.shape_1.setTransform(93.9,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAmBdIhKh8IgBAAIAAB8IglAAIAAi5IAlAAIBKB8IABAAIAAh8IAlAAIAAC5g");
	this.shape_2.setTransform(112,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ag3BJQgVgWAAgjIAAgfQAAgjAVgWQAVgWAiAAQAiAAAVAWQAWAWAAAjIAAAfQAAAjgWAWQgVAWgiAAQgiAAgVgWgAgcgzQgLANAAAWIAAAgQAAAXALANQAKAOASABQATgBAKgOQALgNAAgXIAAggQAAgWgLgNQgLgOgSAAQgTAAgJAOg");
	this.shape_3.setTransform(93.9,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[]},2).wait(1));

	// off
	this.instance = new lib.off();
	this.instance.parent = this;
	this.instance.setTransform(-35.4,17.8,1,1,0,0,0,25.4,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(65,65,65,0.498)").s().p("Ag8BdIAAi5IB5AAIAAAdIhTAAIAAAzIBFAAIAAAbIhFAAIAABOg");
	this.shape_4.setTransform(-18.7,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(65,65,65,0.498)").s().p("Ag7BdIAAi5IB3AAIAAAdIhTAAIAAAzIBHAAIAAAbIhHAAIAABOg");
	this.shape_5.setTransform(-33.2,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(65,65,65,0.498)").s().p("Ag3BJQgVgWAAgjIAAgfQAAgjAVgWQAVgWAiAAQAiAAAWAWQAVAWAAAjIAAAfQAAAjgVAWQgWAWgiAAQgiAAgVgWgAgdgzQgKANAAAWIAAAgQAAAXAKANQALAOASABQATgBALgOQAKgNAAgXIAAggQAAgWgKgNQgMgOgSAAQgTAAgKAOg");
	this.shape_6.setTransform(-49.8,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag8BdIAAi5IB5AAIAAAdIhTAAIAAAzIBFAAIAAAbIhFAAIAABOg");
	this.shape_7.setTransform(-18.7,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag7BdIAAi5IB3AAIAAAdIhTAAIAAAzIBHAAIAAAbIhHAAIAABOg");
	this.shape_8.setTransform(-33.2,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ag3BJQgVgWAAgjIAAgfQAAgjAVgWQAVgWAiAAQAiAAAWAWQAVAWAAAjIAAAfQAAAjgVAWQgWAWgiAAQgiAAgVgWgAgdgzQgKANAAAWIAAAgQAAAXAKANQALAOASABQATgBALgOQAKgNAAgXIAAggQAAgWgKgNQgMgOgSAAQgTAAgKAOg");
	this.shape_9.setTransform(-49.8,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).wait(1));

	// rond
	this.instance_1 = new lib.Rond();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.8,15.8,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:56.3},4,cjs.Ease.get(-1)).to({x:15.8},4,cjs.Ease.get(-1)).wait(1));

	// fond
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004A98").s().p("AjNDDQhRAAg5g5Qg5g5AAhRIAAAAQAAhQA5g5QA5g5BRAAIGbAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");
	this.shape_10.setTransform(35.5,15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#07617A").s().p("AjNDDQhRAAg5g5Qg5g5AAhRIAAAAQAAhQA5g5QA5g5BRAAIGbAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");
	this.shape_11.setTransform(35.5,15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0F795C").s().p("AjNDDQhRAAg5g5Qg5g5AAhRIAAAAQAAhQA5g5QA5g5BRAAIGbAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");
	this.shape_12.setTransform(35.5,15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#16903D").s().p("AjNDDQhRAAg5g5Qg5g5AAhRIAAAAQAAhQA5g5QA5g5BRAAIGbAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");
	this.shape_13.setTransform(35.5,15.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1DA71F").s().p("AjNDDQhRAAg5g5Qg5g5AAhRIAAAAQAAhQA5g5QA5g5BRAAIGbAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");
	this.shape_14.setTransform(35.5,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,-3.9,136.4,38.9);


(lib.marchewalkme = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bras
	this.instance = new lib.bras1_1();
	this.instance.parent = this;
	this.instance.setTransform(-22.7,-204.3,0.571,0.571,0,0,0,44.9,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:11.8,y:-192.2},5).to({regX:45.1,rotation:26.5,y:-207.7},5).to({regX:45,rotation:33.4,y:-215.7},5).to({regX:44.9,rotation:37.2,y:-204.3},5).to({regX:45,regY:38.8,rotation:24,y:-198.6},5).to({regY:38.9,rotation:15,y:-204.3},5).to({regX:44.9,rotation:10.4,y:-215.8},5).to({rotation:0,y:-204.3},5).wait(1));

	// tete corps copy
	this.instance_1 = new lib.corps();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.6,-164.1,1,1,0,0,0,70.9,178.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-147},5).to({y:-167.6},5).to({y:-175.6},5).to({y:-164.1},5).to({y:-158.4},5).to({y:-164.1},5).to({y:-175.6},5).to({y:-164.1},5).wait(1));

	// Calque 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7EEFE").s().p("AoHbWQkihpBEiJQFaqQDPmaQAqhTAcgYQAbgjAHgkQAPhsAKirQAJikACi1QACitgIiPQgJiHgWg5Qgrhkg/iGQguiDAjiSQA0iQB4iYQCAiBECAGQFlAoAqHGQimTIg6FvIgJA4QgcClk7JgQh3DlhhC2QhZCogPAnQgvBBhqAAQhbAAiGgxg");
	this.shape.setTransform(-22.7,138.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7EEFE").s().p("AoPbIQkehzBIiGQFvqGDcmSQAuhSAcgPQAcgcAHgiQAMhsAGisQAFikgCi1QgCitgMiOQgMiHgWg5QguhjhCiEQgxiCAgiTQAxiQB0icQB9iEECABQFmAgA0HEQiKTLgyFxIgHA4QgZCmlTJeQiADkhpC1QhhCngQAmQgwA9hhAAQheAAiMg4g");
	this.shape_1.setTransform(-22.9,136.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7EEFE").s().p("AoXa4Qkah8BNiEQGDp5DpmKQAwhRAegHQAdgUAFghQAIhsACitQACijgFi1QgGitgPiOQgPiGgYg5QgwhihFiDQg0iAAdiUQAtiRBxifQB6iGECgFQFnAYA+HDQhuTOgqFxIgGA5QgVCnlrJaQiJDjhxC0QhoCmgTAmQguA4haAAQhgAAiShAg");
	this.shape_2.setTransform(-22.9,134.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7EEFE").s().p("AoeanQkXiFBSiCQGXprD3mDQAyhPAfACQAcgOAEgeQAHhtgCisQgCikgKi0QgKitgRiOQgSiGgZg4QgzhhhHiBQg3h/AZiUQAqiTBtigQB3iKECgLQFnAQBIHBQhSTRggFxIgGA5QgQCpmDJWQiSDhh6CzQhvClgUAlQguA0hTAAQhiAAiXhIg");
	this.shape_3.setTransform(-23,131.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7EEFE").s().p("AolaUQkRiOBVh+QGspeEDl7QAzhNAfALQAegHADgcQAFhtgGisQgFikgPi0QgOitgViNQgUiGgag3Qg1hghLh/Qg5h+AViVQAniUBpiiQB1iNEBgRQFnAIBTHAQg2TSgZFyIgDA5QgOCpmaJRQibDgiCCyQh2CjgWAlQgtAwhNAAQhkAAibhRg");
	this.shape_4.setTransform(-23,129.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7EEFE").s().p("AoraBQkNiXBah8QG/pQEPlyQA2hLAgAUQAeAAACgaQADhugKisQgJijgTi0QgSisgYiNQgYiFgbg3Qg3hehNh+Qg9h8ASiWQAkiUBlilQBxiPEBgXQFoAABcG9QgaTTgQFzIgCA5QgJCqmyJMQijDeiKCvQh+CjgXAkQgsArhHAAQhmAAifhYg");
	this.shape_5.setTransform(-23,126.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7EEFE").s().p("AoxZsQkIigBeh5QHSpBEalpQA6hJAgAdQAfAHABgZQgBhtgOisQgMijgXizQgWisgciMQgbiFgcg2Qg5hdhQh8Qg/h7AOiWQAhiVBhioQBuiREAgcQFogJBmG7QADTTgIF0IgBA5QgGCqnHJGQitDciRCtQiFChgZAkQgrAohDAAQhoAAighhg");
	this.shape_6.setTransform(-22.9,123.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7EEFE").s().p("ApGZVQkCioBhh2QHloxEmlgQA8hIAgAnQAfANAAgWQgDhtgRisQgRiigbizQgZirgfiMQgeiEgeg1Qg7hchTh6QhCh6ALiWQAdiWBeipQBqiUEAgjQFngRBxG6QAeTSABFzIAAA6QgBCqnfJAQi0DZiaCsQiMCegaAkQgqAkg9AAQhqAAijhqg");
	this.shape_7.setTransform(-21.3,120.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7EEFE").s().p("ApdY+Qj9ixBlhyQH3oiExlVQA/hGAgAvQAgAVgCgVQgFhtgWirQgUiigfiyQgdirgiiLQghiDgfg1Qg9hahWh4QhFh4AIiWQAaiXBZisQBpiWD9goQFngZB6G2QA7TSAKFzIABA5QACCrn0I4Qi9DXihCpQiTCdgcAiQgpAig5AAQhrAAikhzg");
	this.shape_8.setTransform(-19.3,118);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7EEFE").s().p("Ap0YlQj3i5BphvQIIoQE9lMQBAhDAgA3QAgAcgCgTQgIhtgZiqQgZiigiixQgiiqgliKQgjiCghg1Qg/hYhZh2QhHh3AFiWQAWiXBViuQBliZD9guQFmghCEGzQBXTQASFzIACA5QAHCroKIxQjFDUipCmQiZCbgdAiQgoAeg1AAQhsAAimh8g");
	this.shape_9.setTransform(-17.2,115);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7EEFE").s().p("AqKYMQjxjBBthsQIZn/FHlBQBDhBAgBAQAgAigEgQQgLhtgdiqQgcihgmiwQgmipgoiJQgmiCgigzQhBhYhbh0QhLh1ACiWQASiYBSivQBhibD8g0QFlgpCPGwQByTNAaFzIAEA5QAKCroeIoQjNDRiwCkQigCYgeAhQgnAcgxAAQhuAAimiFg");
	this.shape_10.setTransform(-15.1,111.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7EEFE").s().p("ApbYxQj9ixBlhyQH2oiExlWQA/hFAjA9QAiAfgFgRQgQhsgninQgliggxiuQguimgwiHQgvh/gkgyQhHhThhhuQhRhxgHiWQAJiYBIi1QBYigD4hCQFig+CnGnQC6TFAwFwIAHA5QATCqn4JKQi/DdikCvQiVCigcAjQgpAhg6AAQhrAAikhyg");
	this.shape_11.setTransform(-2.7,114);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7EEFE").s().p("AooZRQkJifBeh5QHQpDEalpQA5hKAoA5QAkAcgGgQQgXhrgxilQguidg6irQg4ikg4iDQg2h8gngwQhLhPhohoQhXhsgQiWQAAiYA+i5QBPikD0hRQFdhSDAGdQD/S4BFFtIAKA4QAeCpnQJoQivDpiYC5QiKCrgaAlQgrAohEAAQhnAAighgg");
	this.shape_12.setTransform(9.8,115.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7EEFE").s().p("An1ZqQkSiNBWh/QGppgEBl7QA0hOArA1QAlAZgHgQQgdhqg6iiQg2iahEinQhCighAiAQg9h5gqgtQhPhLhuhiQhehngYiUQgIiZAyi7QBGipDvhfQFYhmDXGRQFESoBbFoIANA4QAoCmmmKEQigD0iMDCQh9CzgXAnQgtAwhOAAQhkAAibhPg");
	this.shape_13.setTransform(22.3,116.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7EEFE").s().p("AmVZ9Qkbh6BNiEQGAp7DnmMQAvhRAtAxQAnAWgIgRQgjhnhDifQg/iWhOijQhLichHh9QhDh1gtgqQhUhGhzhcQhjhhghiTQgRiYAni9QA8itDqhtQFSh5DtGEQGISTBvFiIARA3QAxCkl6KdQiPD+h+DKQhxC6gVApQgvA5hbAAQhgAAiRhAg");
	this.shape_14.setTransform(30.7,117.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7EEFE").s().p("AkLaLQkihnBDiKQFVqSDMmbQAqhTAwAsQAnASgJgQQgohlhNibQhIiShXifQhUiXhOh4QhKhxgvgoQhXhBh5hVQhohbgqiRQgZiWAcjAQAyiwDjh6QFKiNEDF2QHMR6CDFcIAUA1QA6ChlNK0Qh9EFhxDSQhlDCgSApQgvBChrAAQhaAAiFgvg");
	this.shape_15.setTransform(35,117.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7EEFE").s().p("AgpbWQkvg2AriSQDjrDCGm2QAbhaAnAOQAfgHgIgYQgmhmhIidQhDiVhTigQhPiahKh7QhHhzgugpQhVhDh2hZQhmhegliSQgViXAii/QA2ivDnhyQFPiED3F9QGqSIB4FfIATA2QA1CijYLAQhREKhKDWQhCDEgKArQgvBgipAAQhDAAhWgPg");
	this.shape_16.setTransform(33.3,124.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7EEFE").s().p("ADDcCQk0gDATiXQBrreA7nHQANhdAZgRQASgdgIggQgihnhDifQg/iXhOijQhLibhGh9QhEh1gsgrQhUhGhzhcQhjhhghiTQgQiYAni9QA8itDqhsQFSh6DsGFQGHSTBvFjIAQA3QAwChhhK5QglEIgiDTQgfDCgCAqQgqCNkpAAIgMAAg");
	this.shape_17.setTransform(31.7,130.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7EEFE").s().p("ABgaiQgQrmgRnKQgDheAIgsQAEgzgKgmQgghpg9igQg7iZhJilQhGiehDh/QhAh3gsgsQhRhJhxhfQhghkgciUQgMiYAti8QBBirDthlQFWhwDhGMQFjSeBlFmIAPA3QApCgAUKhQAID9ADDKQAFC6AFAoQgSCWkxAwQhJALg4AAQixAAgEh0g");
	this.shape_18.setTransform(33.1,135.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7EEFE").s().p("ADUbAQiKrZhbnBQgli4gVhcQgdhpg5ijQg3iahEinQhCigg/iBQg8h5gqgtQhPhLhuhjQhdhmgYiVQgHiYAzi8QBFipDwheQFZhkDVGRQFBSpBZFoIAOA4QATBVCUK/QB9JUAQAkQAHCWklBiQhzAnhLAAQhzAAgThbg");
	this.shape_19.setTransform(42.5,138.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7EEFE").s().p("AFQbGQkBq4ikmsQghhXgmhbQgjhVgPg0QgZhqg1ikQgyicg/ipQg9iig7iCQg5h7gpguQhNhOhqhmQhahpgTiVQgDiZA4i6QBLimDyhXQFchbDJGYQEdSyBPFrIAMA4QAkCxDlIkQBYDTBLClQBFCaAUAhQAfCUkQCRQiJBJhTAAQhQAAgchHg");
	this.shape_20.setTransform(51,139.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7EEFE").s().p("AE3bCQjcrFiOm0Qg6ixgph5Qgdhqg5iiQg3iahEioQhBigg/iAQg8h6gqgsQhPhMhuhjQhchmgYiVQgIiYAzi8QBGioDxheQFZhlDUGSQFASpBYFpIAOA4QAqC4DEI1QBNDcBACuQA7ChASAjQAXCVkXCCQiFA+hQAAQhZAAgahMg");
	this.shape_21.setTransform(50,140.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7EEFE").s().p("AEea7Qi3rPh3m7Qgxi0gehlQgfhpg+ihQg7iYhJilQhFifhDh+QhAh4grgrQhRhJhwhgQhghkgciUQgMiYAui9QBBirDthkQFXhuDfGLQFhSgBjFmIAPA3QBFEJCOH6QCiI/AVAoQAPCWkdB0Qh+AzhPAAQhjAAgXhSg");
	this.shape_22.setTransform(49,141.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7EEFE").s().p("AEGaxQiSrYhhnAQgni3gShQQgjhohCifQg/iXhNijQhLichGh9QhDh2gsgqQhUhHhyhcQhjhiggiTQgQiYAoi9QA9itDqhrQFTh4DqGGQGDSUBtFjIARA3QApCNCOKLIBdGqQAnCvANAlQAJCXkkBlQh1AphMAAQhvAAgUhZg");
	this.shape_23.setTransform(47.8,142.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7EEFE").s().p("ADuakQhsrehKnFQgei5gHg7QglhnhHicQhDiVhSihQhPibhJh6QhHh0gtgpQhVhEh2haQhlhegliSQgUiXAji/QA3ivDohxQFPiCD2F/QGkSJB3FgIASA2QAxCZBoKSIBGG4QAcC1ALAmQABCXkoBWQhsAfhIAAQh+AAgQhgg");
	this.shape_24.setTransform(46.4,142.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7EEFE").s().p("ADXaUQhHrigxnIQgLhdAFgsQAAgygMgmQgohlhLibQhHiThXifQhTiYhNh4QhJhxgvgpQhXhBh4hWQhohcgpiRQgYiWAejAQAyiwDkh4QFLiLEAF3QHFR9CBFeIAUA0QA3CcBFKfQAaD8ATDKQASC6AIAoQgHCWktBHQhfAWhDAAQiQAAgLhog");
	this.shape_25.setTransform(45,142.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7EEFE").s().p("ACSapQg3rkgonJQgJhdADgzQgBg3gLgoQghhog/igQg9iXhKilQhIidhEh+QhBh3gsgrQhShIhyheQhghjgeiUQgOiYAri9QA/isDshnQFVhyDkGIQFxSbBnFlIAQA3QArCdA4KaIAkHAQAPC4AIAnQgLCXkuBAQhZAThAAAQiYAAgKhrg");
	this.shape_26.setTransform(38.1,144.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7EEFE").s().p("ABMa5QgnrlgfnKIgPj9QgZhqg0ijQgyidg+iqQg8iig7iCQg4h7gpguQhNhOhqhmQhahqgTiWQgCiYA5i5QBLinDzhWQFbhaDIGZQEaSyBNFrIAMA5QAfCcArKWIAcG6QANC1AHAoQgOCWkvA5QhTAQg9AAQiiAAgIhug");
	this.shape_27.setTransform(30.8,146.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7EEFE").s().p("AAGbEQgWrmgWnKIgMkLQgShsgoinQgniggxitQgwimgyiHQgvh+gmgyQhHhThihtQhRhwgJiXQAJiYBGi1QBXigD5hFQFghACrGmQDBTEAzFwIAIA4QASCUAfKYIAWG1QAJCzAHAnQgRCWkwAzQhMANg6AAQisAAgGhyg");
	this.shape_28.setTransform(23.4,148.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7EEFE").s().p("AhBbKQgIrlgMnLQgEi7gFhfQgJhtgcipQgbiiglixQgkipgniKQgmiBgig0QhBhYhah1QhJh1ACiXQAUiXBTivQBiiaD9gyQFlgnCLGyQBpTOAYFzIADA5QAFBTAVLSQATJgAKAmQgVCVkxAtQhFAKg2AAQi2AAgDh2g");
	this.shape_29.setTransform(15.9,149.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E7EEFE").s().p("AiLbNQAIrmgBnLQgBi7gDhuQgChtgPiqQgPikgYi0QgYirgdiMQgdiEgdg2Qg6hchSh7QhBh7AOiWQAeiVBgipQBtiSEAggQFmgNBsG7QAPTTgDFzIAAA5QgFDeAII/QAIJQALAvQgXCUkyAnQg+AIgxAAQjCAAgCh6g");
	this.shape_30.setTransform(8.3,150);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7EEFE").s().p("AkNbKQAXrmAInLQADi7AAh8QAHhtgEirQgCilgMi0QgLitgTiOQgTiFgag4QgzhhhIiAQg4h/AYiVQApiSBsiiQB4iKEAgNQFnANBMHBQhKTRgeFyIgFA5QgSC/gBJVQAADqADC6QADCsAGAnQgbCUkzAgQg0AGgsAAQjRAAACh+g");
	this.shape_31.setTransform(6.4,150.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E7EEFE").s().p("AmgbBQAnrlASnKQADheABhdQAChXAFg0QAOhsAKirQAJikACi1QABitgJiPQgJiHgWg5Qgshkg/iGQguiCAjiTQA0iPB3iZQCBiBEBAFQFlAoAqHFQiiTIg5FvIgJA5QgfC1gJJVQgEDnACC4QABCqAFAmQgdCUkzAZQgsAEglAAQjhAAAEiDg");
	this.shape_32.setTransform(6,150.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7EEFE").s().p("AoMa0QA3rkAbnJQAGheADhkQAEhdAIg1QAWhrAWiqQAVijAPi0QANisACiQQABiHgSg7Qgkhng1iJQgliGAtiPQA+iMCCiQQCKh3EAAYQFiBBAJHHQj7S6hUFqIgMA3QgrCwgRJQQgHDkAAC2QAACnAEAnQghCTkyATQgiACgfAAQjyAAAHiIg");
	this.shape_33.setTransform(1.7,149.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E7EEFE").s().p("AotaiQBhrfA1nIQALhdAIhaQAJhVAIgzQAVhrAUiqQATijANi1QAMitAAiPQgBiHgSg7Qglhmg3iJQgmiFAsiQQA8iMCBiSQCJh5D/AWQFjA9AOHHQjuS8hQFrIgMA4QgqC1g5JTQgXDngOC4QgNCpACAoQgpCRkzABIgGAAQkvAAASiXg");
	this.shape_34.setTransform(-1.9,148.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E7EEFE").s().p("Ak0cyQk0gQAaiXQCMrYBQnEQAgi5AShxQAThrATiqQARikALi0QAKitgCiPQgCiHgSg7Qgnhmg4iIQgoiFAqiRQA7iMB/iTQCIh6EAASQFjA6ATHHQjhS+hMFsIgLA4QgtDIhfJGQhfJBADA0QgtB/j7AAQgdAAgggCg");
	this.shape_35.setTransform(-5.5,147.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E7EEFE").s().p("AlecoQkygiAiiVQC2rQBpm+QAsi2AUhdQAShsAQiqQAQikAJi0QAIitgDiPQgDiHgUg7Qgnhlg6iIQgpiEApiSQA5iNB9iUQCHh8EAAQQFkA2AYHHQjVTAhHFtIgLA4QgRBQijLBQiKJRAAAnQgtBwjPAAQgyAAg9gHg");
	this.shape_36.setTransform(-8.9,145.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E7EEFE").s().p("AmGcaQkwg0AqiTQDfrECDm3IBLj8QAShsAOirQAOijAHi1QAHitgFiPQgFiHgUg6Qgphlg7iIQgqiDAniSQA4iOB8iVQCEh9EBAMQFkAzAdHGQjHTDhEFtIgKA4QgeCXi+J7Ih+GlQgyCtgGAnQgvBiisAAQhCAAhUgOg");
	this.shape_37.setTransform(-12.4,144.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E7EEFE").s().p("AmwcHQkshFAziQQEIq2CcmvQAghYAXgvQAXg0AIgpQAQhsANirQAMikAFi1QAFitgGiPQgHiHgVg6Qgqhlg8iGQgsiDAmiSQA2iPB6iXQCDh+EBAKQFlAuAiHGQi6TFhAFuIgKA5QgeCfjmJxIibGkQg/CsgJAnQgwBWiRAAQhNAAhogYg");
	this.shape_38.setTransform(-15.7,142.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E7EEFE").s().p("AnXbyQkohXA7iNQEvqlC1mmQAlhVAagkQAZgsAHgmQAQhsAKirQALikADi1QACitgHiPQgIiHgVg6Qgrhkg+iGQguiDAkiSQA1iPB5iYQCBiAECAHQFlArAmHFQisTHg8FvIgKA4QgcCjkPJqQhmDohSC5QhMCqgMAnQgwBMh8AAQhUAAh4gjg");
	this.shape_39.setTransform(-18.9,140.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E7EEFE").s().p("An/bZQkihoBEiJQFVqSDNmaQAqhUAcgZQAbgiAHgkQAOhtAJirQAIikACi1QABitgKiOQgJiHgWg6Qgshkg/iFQgviCAiiTQA0iQB2iZQCBiCEBAFQFmAnArHFQigTJg3FvIgJA5QgbCkk4JiQh1DmhgC2QhZCpgOAmQgwBDhrAAQhbAAiFgwg");
	this.shape_40.setTransform(-22,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(1));

	// pied
	this.instance_2 = new lib.pied1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-89.4,323.5,0.571,0.571,0,0,0,36.2,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:36.3,regY:24.4,rotation:75,x:-102.7,y:262.2},10).to({regX:36.4,regY:24.5,rotation:30,x:12.4,y:281.3},5).to({regX:36.3,regY:24.6,rotation:-45,x:126.4,y:335.5},5).to({regX:36.4,regY:24.5,rotation:-15,x:88.2,y:335},5).to({x:-35.6,y:343.3},8).to({regX:36.2,rotation:0,x:-89.4,y:323.5},7).wait(1));

	// Calque 16
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9EA7D2").s().p("ACAb0QlNyihFkcIgKgsQgNg9hWkeIi3psQj7tjAahcQARg5B4giQBvghCdABQCUADCJAwQB+AyA7BsQC7TSAsDVQAOBCAtC5QBsG8BpFqQCNHnBCBaQmyEVi/AAQgWAAgTgEg");
	this.shape_41.setTransform(46.6,146.4,1.067,1.067);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9EA7D2").s().p("ACDbpQkGylhFkbIgKgsQgMg9hlkYIjUpcQhwlDhXkXQhOkAAFhQQAOg6B2goQBtgnCdgGQCTgFCLAqQCBAsBABoQD3TIA3DSQAQBDA7DFQAoClAxDeQAvDVAyDcQB2H/A5BVQmvD5jAAAQgeAAgYgGg");
	this.shape_42.setTransform(46.4,149,1.067,1.067);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9EA7D2").s().p("ACGbaQi9ykhGkaIgKgsQgMg9hxkQQhmj7iLlQQiBk7hlkQQhaj6AAhPQALg6B0gvQBrgrCdgPQCTgLCNAjQCDAlBEBlQEyS6BBDQQAKAhAeBOQAbBJAZBcQApCjAnDjQAoDZAnDiQAmDYAkCrQAkCjAhA+QmqDdjCAAQgnAAgdgJg");
	this.shape_43.setTransform(46,151.3,1.067,1.067);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9EA7D2").s().p("ACSc8Qh9zxhJkrIgLguQgOhBiGkZQh5kFimlbQiZlFh7kaQhvkDgEhUQAJg/B6g4QBvgzCmgYQCcgUCYAeQCOAhBOBoQGFT6BQDaQAMAiAoBaQAjBTAcBiQArCuAiD1QAiDrAdD3QAeDsAcC7QAdCyAgBFQm+DOjRAAQg0AAglgNg");
	this.shape_44.setTransform(45.5,153.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9EA7D2").s().p("ACMazQgsydhGkWIgKgqQgNg9iJj/Qh9jsisk6QigkniAj/Qh1jsgHhPQAFg7Bvg5QBng2CagdQCRgaCQAVQCGAZBOBeQGnSWBUDJQANAfAtBaQAmBSAcBdQAoCiAYDpQAZDfAPDsQARDiARC0QARCrAbBCQmVCljEAAQg+AAgpgQg");
	this.shape_45.setTransform(44.8,154.7,1.067,1.067);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9EA7D2").s().p("ACNabQAdyWhFkSIgKgrQgNg8iUj1QiIjki8kuQivkciOj2QiBjjgLhPQACg7Bsg/QBkg6CYglQCQghCRAOQCHASBTBaQHeSBBeDEQAPAfA0BgQAsBWAeBdQAoCgAPDsQAQDhAEDwQAHDnAHC4QAJCuAXBEQmECKjFAAQhOAAgwgVg");
	this.shape_46.setTransform(44.2,155.9,1.067,1.067);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9EA7D2").s().p("AAEaqQBmyTgvkZIgHgrQgIg9h9kDQhxjwiflAQiSkrh3kEQhqjvgEhPQAIg7Byg0QBogxCcgWQCSgTCPAbQCEAfBKBiQFwSoBLDMQAMAgAqBiQAjBXAWBhQAcCjgCDsQABDhgMDvQgJDlgFC3QgCCuATBFQljBkjDAAQhsAAg7gfg");
	this.shape_47.setTransform(34.1,153.6,1.067,1.067);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9EA7D2").s().p("AiuavQCuyNgXkcIgDgrQgDg+hlkOQhaj7iAlOQh1k5hdkOQhSj5ADhOQANg6B3gpQBsgnCdgIQCUgFCKApQCCArBBBoQD+TGA3DSQAJAhAgBjQAbBYAOBiQAOClgTDrQgODggcDtQgYDjgQC1QgOCsAOBGQk0BBi7AAQiZAAhHgsg");
	this.shape_48.setTransform(28,150.3,1.067,1.067);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9EA7D2").s().p("AlmaqQD3yBgBkfIAAgsQACg9hKkYQhDkChflaQhWlDhDkWQg6kAALhOQASg5B6geQBwgcCdAHQCSAJCHA2QB9A3A3BuQCKTYAjDXQAGAhAWBiQASBaAGBiQABCngjDoQgeDegrDpQgnDggcCzQgYCqAJBHQjzAiimAAQjfAAhWg+g");
	this.shape_49.setTransform(22.3,146,1.067,1.067);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9EA7D2").s().p("An2aaQE/xzAWkeIAEgrQAHg+gvkeQgqkIg+liQg3lLgnkbQgikFAShNQAYg2B8gTQBygRCbAWQCSAWCBBDQB3BCAsBzQAVTgAPDYQACAiANBiQAKBZgDBiQgNCmgyDlQguDbg5DlQg2DcgnCwQgjCnAFBHQiYALh4AAQlSAAhphXg");
	this.shape_50.setTransform(12.2,140.7,1.067,1.067);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9EA7D2").s().p("ApaZ8QGGxfAtkcIAIgrQAMg9gUkiQgRkMgblnQgYlPgLkeQgIkIAZhKQAdg0B9gHQBygHCZAlQCQAkB6BOQBwBOAhB2QhhTcgGDYQgBAiAEBhQACBYgLBhQgaClhCDgQg9DXhIDfQhEDYgyCsQgtCkAABHIgiAAQogAAiCh8g");
	this.shape_51.setTransform(-2.5,134.9,1.067,1.067);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9EA7D2").s().p("AqDaGQF0xtA0kcIAIgsQAOg8gEkkQgCkOgHlpQgElSAFkgQAHkIAdhKQAggyB9AAQBzgBCXAtQCNAsB1BUQBtBUAbB3QikTWgRDXQgDAjgBBbQgDBUgNBgQgeClhBDeQg8DXhFDeQhADVgvCrQgrCjABBHIhJABQn9AAh/h3g");
	this.shape_52.setTransform(-5.8,131.4,1.067,1.067);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9EA7D2").s().p("AqqaOQFix7A6kcIAJgrQAPg9AMklQANkPAOlrQAPlTAWkgQAWkJAihIQAigwB8AGQBzAGCUA0QCLAzBxBbQBoBZAUB5QjlTLgdDXQgEAigGBVQgHBQgQBeQgiClg/DeQg8DVhBDcQg9DUgsCqQgnCiACBHIhuABQndAAh7hxg");
	this.shape_53.setTransform(-9.2,127.8,1.067,1.067);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9EA7D2").s().p("ArRaUQFRyJBBkcIAKgrQAQg9AckmIA+p6QAjlTAmkgQAlkJAmhGQAlguB7ANQB0AMCQA8QCIA7BsBgQBjBfAOB6QkmS9goDUQgHAigKBQQgKBKgTBdQgmClg+DcIh5GvQg5DTgpCpQgjChAEBHQhJAChCAAQnGAAh4hsg");
	this.shape_54.setTransform(-12.6,123.9,1.067,1.067);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9EA7D2").s().p("Ar3aXQFAyYBIkaIALgsQASg8AsklIBip6QA1lSA3kfQA1kHAohEQAngtB8AUQByASCOBEQCEBCBnBmQBdBkAIB6QlnSsgzDSQgRBCgpDKQgqCkg9DbIhzGtQiDH5ALBnQhaADhQAAQmqAAh1hng");
	this.shape_55.setTransform(-16.1,119.8,1.067,1.067);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9EA7D2").s().p("AsbaWQEvymBOkZIAMgrQATg8A8kkICFp3QC+twBChEQAqgqB6AaQByAYCJBLQCBBJBhBsQBYBoABB7QmmSWg+DPQgUBCgyC9QiTIWhEERQh5HxANBtQhqAFhbAAQmTAAhyhkg");
	this.shape_56.setTransform(-19.6,115.6,1.067,1.067);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9EA7D2").s().p("AsiZ1QF5yBBQkYIANgrQAUg7AvkkIBqp2QA6lRA6kdQA3kGAqhEQAogsB8AWQByATCMBGQCEBEBlBoQBcBlAGB6Ql4Smg3DSQgQBCgvDOQguCjhHDZIiHGpQhBDPgtCnQgqCfABBGQo/gDiFiCg");
	this.shape_57.setTransform(-20.6,117.7,1.067,1.067);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9EA7D2").s().p("AsnZOQHCxYBSkWIANgrQATg7AlkkQAjkNArloQArlQAtkeQArkGAnhFQAngtB7ARQBzAOCQBBQCFA/BpBjQBhBiAKB6QlKS0gtDTQgIAigMBVQgOBPgYBcQgwCihRDXQhNDQhUDWQhPDOg4CmQg1CegFBHQo9gjh+iJg");
	this.shape_58.setTransform(-21.4,119.7,1.067,1.067);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9EA7D2").s().p("AsqYkQIJwsBUkUIAMgqQAVg7AXkiQAYkMAclnQAblQAfkdQAhkGAjhHQAkguB9AMQBzAKCSA7QCHA5BuBgQBjBdAQB6QkaTAgmDVQgGAhgKBeQgLBVgZBfQgwCghdDWQhXDNhiDUQhdDMhFClQhACcgJBHQo6hDh2iPg");
	this.shape_59.setTransform(-22.2,121.4,1.067,1.067);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9EA7D2").s().p("AsrX4QJOv9BVkRIANgqQAVg6ALkhQANkKALlmQAMlOASkdQAUkGAghHQAjgwB9AHQBzAFCUA2QCKAzBxBbQBnBaAUB5QjqTKgeDWQgEAigIBnQgKBbgYBgQgxCfhnDSQhiDLhwDRQhpDKhRCiQhMCbgNBGQo2hhhuiVg");
	this.shape_60.setTransform(-22.9,122.8,1.067,1.067);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9EA7D2").s().p("AsrXIQKSvKBWkNIANgqQAVg5gBkeQABkJgFlkQgDlMAFkdQAHkEAdhJQAhgyB9ADQBzABCXAvQCLAvB1BWQBqBWAaB4Qi8TSgUDYQgDAigGBuQgIBigYBhQgyCchyDQQhrDHh+DOIjTFmQhWCYgRBGQoxiAhmibg");
	this.shape_61.setTransform(-23.4,123.8,1.067,1.067);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9EA7D2").s().p("AsoWWQLTuUBWkJIAOgpQAVg4gOkcQgKkHgVlhQgSlKgJkbQgFkEAbhJQAegzB9gDQB0gDCXApQCOApB4BSQBuBSAdB3QiKTYgNDYQgCAjgDB3QgGBngYBiQgzCah8DLQh0DEiLDKIjsFfQhhCVgWBFQopifhdigg");
	this.shape_62.setTransform(-23.8,124.5,1.067,1.067);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9EA7D2").s().p("AsjViQMRtbBXkFIANgnQAWg4gakaQgWkDgnlfQgglHgWkZQgRkCAYhLQAdg0B8gHQBygICaAjQCPAkB6BNQByBNAiB2QhaTdgEDYIgCChQgEBugYBiQgzCYiGDGQh9DAiZDEIkEFYQhrCSgZBDQogi8hUilg");
	this.shape_63.setTransform(-24.1,124.8,1.067,1.067);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9EA7D2").s().p("AscUsQNMsgBYj/IAOgmQAVg3gnkWQggkBg3lbQgwlEgjkXQgekAAVhMQAbg1B7gMQBzgNCaAeQCRAeB+BIQBzBJAnB0QgpTgAEDYIACCpQgEBzgXBjQgzCUiQDCQiFC6imDAIkaFOQh2COgeBCQoUjZhLiqg");
	this.shape_64.setTransform(-24.2,124.7,1.067,1.067);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9EA7D2").s().p("AsgT0QOGriBYj5IAOgmQAVg1gzkTQgrj9hIlXQg/lBgxkUQgqj+ARhNQAZg2B7gRQBygRCcAYQCSAYCABEQB2BEArByQAIThANDYQAQEkglBnQgzCRiZC8QiNC2iyC5QioCziJCQQiACLghBBQoIj3hCitg");
	this.shape_65.setTransform(-22.9,124.3,1.067,1.067);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9EA7D2").s().p("AszS6QO8qhBYjzIAOgkQAVg0g/kPQg3j6hXlSQhPk9g+kSQg2j7AOhNQAWg3B7gWQBxgVCdASQCRASCEA+QB5BAAvBxQA5TfAVDXQADAiAFCVQAAB+gYBjQgzCOiiC1QiVCvi+CzQizCtiUCMQiJCFglA/Qn5kSg5ixg");
	this.shape_66.setTransform(-19.5,123.5,1.067,1.067);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9EA7D2").s().p("AseTbQOerKBOj3IAMglQATg0hKkNQhAj3hjlPQhck5hJkPQg/j6ALhNQAVg4B6gbQBvgZCdALQCTANCGA5QB7A7A0BvQBoTcAdDWQAFAiAKCVQAFB9gTBkQgtCQiaC8QiOC1i2C7QirC0iOCSQiDCLgjBBQoEj9hAiug");
	this.shape_67.setTransform(-11.5,122.8,1.067,1.067);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9EA7D2").s().p("AsJT7QN9rxBEj6IALgmQARg1hUkJQhJj1hxlLQhnk2hTkMQhJj3AIhNQASg5B5gfQBwgeCcAFQCUAICHA0QB+A2A4BtQCYTXAmDVQAGAhAPCUQAKB9gPBkQgnCSiSDCQiGC8iuDCQijC7iHCXQh+CQggBDQoPjnhGirg");
	this.shape_68.setTransform(-3.3,121.7,1.067,1.067);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9EA7D2").s().p("Ar0UaQNcsXA6j9IAJgmQAPg2hekGQhTjyh9lHQhzkxhdkJQhSjzAFhOQAQg5B4gkQBugiCcgBQCUABCJAvQCAAxA8BrQDITQAuDUQAHAhAWCSQAPB8gMBmQghCTiJDIQh/DBilDJQibDCiCCdQh2CVgdBDQoYjPhOiog");
	this.shape_69.setTransform(5,120.3,1.067,1.067);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9EA7D2").s().p("AreU3QM5s7Avj/IAIgnQANg2hokDQhbjviLlBQh+kthnkFQhcjwAChOQAOg6B2gpQBtgmCdgHQCTgECLApQCBAtBABoQD3THA3DTQAIAhAcCQQAUB8gIBlQgbCUiBDOQh2DGidDQQiSDIh7CiQhvCagbBFQogi4hVilg");
	this.shape_70.setTransform(13.5,118.6,1.067,1.067);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#9EA7D2").s().p("ArIVTQMVteAlkCIAGgmQALg4hyj+QhljriWk8QiKkohxkAQhkjtgChOQAMg6B1guQBrgqCdgNQCTgKCMAkQCDAnBEBmQEmS9A+DQQAKAhAhCPQAZB6gDBmQgWCVh4DUQhuDKiTDXQiKDNh0CnQhoCfgYBGQooihhcihg");
	this.shape_71.setTransform(22,116.7,1.067,1.067);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9EA7D2").s().p("AqxVtQLut/AckDIAEgnQAIg3h6j6Qhvjniik2QiVkjh7j8QhujpgDhOQAJg6BzgyQBpgvCcgSQCTgQCOAfQCDAiBIBjQFVSxBGDNQALAhAnCNQAeB5ABBlQgQCXhvDYQhlDPiKDcQiBDThtCsQhhCjgVBHQouiKhjidg");
	this.shape_72.setTransform(30.5,114.5,1.067,1.067);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9EA7D2").s().p("ApjWGQLHufAQkDIADgoQAGg4iEj1Qh4jiiukwQigkciDj4Qh3jkgHhOQAHg7Bxg2QBngyCcgZQCSgWCPAaQCEAdBMBgQGDSiBODLQAMAgAsCLQAjB3AFBmQgKCXhlDdQhdDTiADiQh4DYhlCwQhbCngSBHQozhxhpiZg");
	this.shape_73.setTransform(33.4,112,1.067,1.067);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9EA7D2").s().p("AoPWdQKdu8AGkFIABgnQAEg4iOjwQh/jei5kpQiskWiNjyQh/jggKhNQAFg8Bvg6QBlg3CageQCSgbCPAUQCGAXBPBeQGwSSBXDIQANAfAyCLQAnB0AJBmQgECXhcDhQhTDWh3DnQhvDdhdC1QhUCqgPBIQo3hahviUg");
	this.shape_74.setTransform(35.7,109.2,1.067,1.067);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9EA7D2").s().p("Am7WzQJ0vZgFkEIAAgoQABg4iXjqQiHjajFkhQi2kPiWjtQiIjbgNhNQADg7Bsg/QBkg6CZglQCQggCQAOQCHASBTBbQHcSBBeDEQAPAfA3CIQArBzAOBkQACCYhSDkQhLDahtDsQhlDhhVC4QhNCugLBIQo7hBh2iPg");
	this.shape_75.setTransform(37.9,106.1,1.067,1.067);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9EA7D2").s().p("AllXHQJIvzgPkEIgCgoQgBg4igjkQiQjUjPkaQjAkIigjnQiPjVgQhNQAAg7BqhDQBhg+CXgrQCPgmCRAJQCIANBVBXQIJRuBlDAQAQAfA9CFQAvBxASBkQAJCYhJDnQhBDdhjDwQhcDlhNC7QhGCxgIBJQo8gph8iKg");
	this.shape_76.setTransform(40.2,102.8,1.067,1.067);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9EA7D2").s().p("AjsY3QGaxBgakOIgDgqQgDg6iRjxQiDjhi7kpQitkXiPjzQh/jhgLhNQADg7Bug9QBkg5CZgiQCRgeCQARQCGAVBSBcQHISJBbDGIBECXQArBnATBkQAOCdgvDsQgpDhhDDzQg9DogzC9QgsCxACBJQh6AHhnAAQl7AAhuhfg");
	this.shape_77.setTransform(37.6,112.1,1.067,1.067);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9EA7D2").s().p("AhpaHQDkx6glkWIgFgrQgGg8iBj+Qh3jrimk5Qiakmh9j+QhwjrgGhOQAHg7Bwg3QBpgyCagaQCSgWCPAZQCFAcBMBgQGHShBPDLQAMAgAvBqQAlBeAVBiQAUCigUDsQgRDjgiDxIg3GiQgTCwALBGQkgA2i2AAQitAAhLgxg");
	this.shape_78.setTransform(35,121.9,1.067,1.067);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9EA7D2").s().p("AAGa+QAqydgvkbIgGgrQgIg+h0kJQhpj2iSlIQiGkzhrkJQhhj1gBhPQAJg6B1gxQBqgsCcgRQCTgOCOAhQCDAkBGBkQFES1BEDPQAKAgAlBdQAgBTAUBgQAcClAGDpQAHDhgCDsQABDiADC1QAGCrAVBEQl4B5jEAAQhaAAg0gZg");
	this.shape_79.setTransform(35,131.2,1.067,1.067);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9EA7D2").s().p("ABAbiQiSyrg6kcIgJgsQgKg+hlkVQhcj/h9lWQhzk/hakUQhQj+ADhPQANg6B3gqQBsgnCdgIQCUgFCLAoQCBAsBBBnQEATGA4DSQAJAhAaBPQAYBKAVBcQAiCmAgDjQAfDbAfDjQAeDZAeCsQAeCkAfA/QmjDGjDAAQgvAAgjgLg");
	this.shape_80.setTransform(41.2,139.5,1.067,1.067);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9EA7D2").s().p("ACJdrQlkzxhKkuIgKgvQgOhChckxIjEqVQkLudAchiQASg9CAglQB2gjCoABQCdADCSA0QCHA1A/BzQDIUkAvDjQAPBHAvDGQBzHVBxGFQCXIIBHBfQnPEpjMAAQgYAAgUgEg");
	this.shape_81.setTransform(46.7,146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).wait(1));

	// pied
	this.instance_3 = new lib.pied2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.3,318.6,0.571,0.571,0,0,0,45.8,26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:15,x:90.5,y:322.1},5).to({regY:26.2,x:-41.5,y:323.3},5).to({regY:26.1,rotation:30,x:-81,y:304.4},5).to({regX:46.1,regY:25.9,rotation:30.1,x:-89.9,y:308.6},5).to({scaleX:0.57,scaleY:0.57,rotation:74.4,x:-66.1,y:269.9},5).to({regX:45.9,scaleX:0.57,scaleY:0.57,rotation:60,x:-17.4,y:275.2},5).to({regX:46,regY:26.1,scaleX:0.57,scaleY:0.57,rotation:52.4,x:30.3,y:269.1},5).to({regX:45.8,scaleX:0.57,scaleY:0.57,rotation:0,x:101.3,y:318.6},5).wait(1));

	// bras
	this.instance_4 = new lib.Bras2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34.3,-199.5,0.57,0.57,36.1,0,0,51.3,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:51.4,regY:33.5,scaleX:0.57,scaleY:0.57,rotation:34.2,x:34.4,y:-182.3},5).to({rotation:21.2,x:34.3,y:-202.9},5).to({regY:33.3,rotation:6.2,x:34.4,y:-211},5).to({regX:51.5,regY:33.5,rotation:9.1,x:34.3,y:-199.5},5).to({regX:51.4,regY:33.4,rotation:21.2,x:34.4,y:-193.8},5).to({regX:51.5,rotation:36.2,x:34.3,y:-199.5},5).to({regX:51.4,regY:33.3,y:-211},5).to({regX:51.3,scaleX:0.57,scaleY:0.57,rotation:36.1,y:-199.5},5).wait(1));

	// sol
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9EA7D2").s().p("AvJBLIgggDQlxgeAAgqQAAgrGRgfQGSgfI3AAQI4AAGSAfQGRAfAAArQAAAqlxAeIggADQmSAfo4AAQo3AAmSgfg");
	this.shape_82.setTransform(22.4,345.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9EA7D2").s().p("AuxBLIgggDQlogeAAgqQAAgrGIgfQGIgfIpAAQIqAAGIAfQGIAfAAArQAAAqloAeIggADQmIAfoqAAQopAAmIgfg");
	this.shape_83.setTransform(22.4,345.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#9EA7D2").s().p("AuZBLIgfgDQlfgeAAgqQAAgrF+gfQF+gfIbAAQIcAAF+AfQF+AfAAArQAAAqlfAeIgfADQl+AfocAAQobAAl+gfg");
	this.shape_84.setTransform(22.4,345.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9EA7D2").s().p("AuBBLIgegDQlWgeAAgqQAAgrF0gfQF0gfINAAQIOAAF0AfQF0AfAAArQAAAqlWAeIgeADQl0AfoOAAQoNAAl0gfg");
	this.shape_85.setTransform(22.4,345.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9EA7D2").s().p("AtpBLIgdgDQlNgeAAgqQAAgrFqgfQFqgfH/AAQIAAAFqAfQFqAfAAArQAAAqlMAeIgeADQlqAfoAAAQn/AAlqgfg");
	this.shape_86.setTransform(22.4,345.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9EA7D2").s().p("AtRBLIgdgDQlEgeAAgqQAAgrFhgfQFggfHxAAQHyAAFhAfQFgAfAAArQAAAqlEAeIgcADQlhAfnyAAQnxAAlggfg");
	this.shape_87.setTransform(22.4,345.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9EA7D2").s().p("As6BLIgbgDQk7geAAgqQAAgrFWgfQFXgfHjAAQHkAAFXAfQFWAfAAArQAAAqk7AeIgbADQlXAfnkAAQnjAAlXgfg");
	this.shape_88.setTransform(22.4,345.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9EA7D2").s().p("AsiBLIgagDQkygeAAgqQAAgrFMgfQFNgfHVAAQHWAAFNAfQFMAfAAArQAAAqkxAeIgbADQlNAfnWAAQnVAAlNgfg");
	this.shape_89.setTransform(22.4,345.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9EA7D2").s().p("AsKBLIgagDQkpgeAAgqQAAgrFDgfQFDgfHHAAQHJAAFCAfQFDAfAAArQAAAqkpAeIgaADQlCAfnJAAQnHAAlDgfg");
	this.shape_90.setTransform(22.4,345.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#9EA7D2").s().p("AryBLIgZgDQkggeAAgqQAAgrE5gfQE5gfG5AAQG7AAE4AfQE5AfAAArQAAAqkgAeIgZADQk4Afm7AAQm5AAk5gfg");
	this.shape_91.setTransform(22.4,345.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9EA7D2").s().p("AraBLIgYgDQkXgeAAgqQAAgrEvgfQEvgfGrAAQGtAAEuAfQEvAfAAArQAAAqkWAeIgZADQkuAfmtAAQmrAAkvgfg");
	this.shape_92.setTransform(22.4,345.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9EA7D2").s().p("Au0BLIgfgDQlqgeAAgqQAAgrGJgfQGJgfIrAAQIrAAGKAfQGJAfAAArQAAAqlpAeIggADQmKAforAAQorAAmJgfg");
	this.shape_93.setTransform(22.4,345.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9EA7D2").s().p("AufBLIgfgDQlhgeAAgqQAAgrGAgfQGAgfIfAAQIfAAGBAfQGAAfAAArQAAAqlhAeIgfADQmBAfofAAQofAAmAgfg");
	this.shape_94.setTransform(22.4,345.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9EA7D2").s().p("AuKBLIgegDQlZgeAAgqQAAgrF3gfQF4gfISAAQITAAF4AfQF3AfAAArQAAAqlZAeIgeADQl4AfoTAAQoSAAl4gfg");
	this.shape_95.setTransform(22.4,345.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9EA7D2").s().p("At1BLIgdgDQlRgeAAgqQAAgrFugfQFvgfIGAAQIHAAFvAfQFuAfAAArQAAAqlRAeIgdADQlvAfoHAAQoGAAlvgfg");
	this.shape_96.setTransform(22.4,345.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9EA7D2").s().p("AtfBLIgdgDQlKgeAAgqQAAgrFngfQFmgfH5AAQH7AAFmAfQFmAfAAArQAAAqlJAeIgdADQlmAfn7AAQn5AAlmgfg");
	this.shape_97.setTransform(22.4,345.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9EA7D2").s().p("AtKBLIgdgDQlBgeAAgqQAAgrFegfQFdgfHtAAQHuAAFeAfQFdAfAAArQAAAqlBAeIgcADQleAfnuAAQntAAldgfg");
	this.shape_98.setTransform(22.4,345.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#9EA7D2").s().p("As1BLIgcgDQk5geAAgqQAAgrFVgfQFUgfHhAAQHiAAFVAfQFUAfAAArQAAAqk5AeIgbADQlVAfniAAQnhAAlUgfg");
	this.shape_99.setTransform(22.4,345.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9EA7D2").s().p("AsgBLIgbgDQkygeAAgqQAAgrFNgfQFMgfHUAAQHWAAFMAfQFMAfAAArQAAAqkxAeIgbADQlMAfnWAAQnUAAlMgfg");
	this.shape_100.setTransform(22.4,345.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9EA7D2").s().p("AsLBLIgbgDQkpgeAAgqQAAgrFEgfQFDgfHIAAQHKAAFDAfQFDAfAAArQAAAqkpAeIgaADQlDAfnKAAQnIAAlDgfg");
	this.shape_101.setTransform(22.4,345.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9EA7D2").s().p("Ar2BLIgagDQkhgeAAgqQAAgrE7gfQE6gfG8AAQG9AAE7AfQE6AfAAArQAAAqkhAeIgZADQk7Afm9AAQm8AAk6gfg");
	this.shape_102.setTransform(22.4,345.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82}]}).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_82}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-342.8,303.7,699.4);


// stage content:
(lib.Walkme_anim_marches_voute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bouton1.addEventListener("click", marchelente.bind(this));
		function marchelente()
		{ 
			this.gotoAndPlay(1); 
			this.bouton1.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		//this.bouton1.visible=false;
		//this.bouton2.visible=true;
		
		this.bouton1.addEventListener("click", marchenormale.bind(this));
		
		function marchenormale()
		{ 
			this.gotoAndPlay(0); 
			this.bouton1.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(229,400);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(2));

	// Calque 7
	this.bouton1 = new lib.bouton2();
	this.bouton1.parent = this;
	this.bouton1.setTransform(191.4,22.7);

	this.timeline.addTween(cjs.Tween.get(this.bouton1).wait(2));

	// marche walkme
	this.instance = new lib.marchewalkme();
	this.instance.parent = this;
	this.instance.setTransform(230.1,425.6,1,1,0,0,0,32,6.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// marche lente
	this.instance_1 = new lib.marchenon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(208.5,433,1,1,0,0,0,8.7,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228,399,460,802);
// library properties:
lib.properties = {
	id: 'F582745C6E7A432797CCC2D9C760241F',
	width: 458,
	height: 800,
	fps: 20,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F582745C6E7A432797CCC2D9C760241F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;