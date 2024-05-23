/*
EventTarget : addEventListener,dispatchEvent,removeEventListener
Node : nodeType,nodeName,baseURI,isConnected,ownerDocument,parentNode,parentElement,childNodes,firstChild,lastChild,previousSibling,nextSibling,nodeValue,textContent,ELEMENT_NODE,ATTRIBUTE_NODE,TEXT_NODE,CDATA_SECTION_NODE,ENTITY_REFERENCE_NODE,ENTITY_NODE,PROCESSING_INSTRUCTION_NODE,COMMENT_NODE,DOCUMENT_NODE,DOCUMENT_TYPE_NODE,DOCUMENT_FRAGMENT_NODE,NOTATION_NODE,DOCUMENT_POSITION_DISCONNECTED,DOCUMENT_POSITION_PRECEDING,DOCUMENT_POSITION_FOLLOWING,DOCUMENT_POSITION_CONTAINS,DOCUMENT_POSITION_CONTAINED_BY,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,appendChild,cloneNode,compareDocumentPosition,contains,getRootNode,hasChildNodes,insertBefore,isDefaultNamespace,isEqualNode,isSameNode,lookupNamespaceURI,lookupPrefix,normalize,removeChild,replaceChild

Document : implementation,URL,documentURI,compatMode,characterSet,charset,inputEncoding,contentType,doctype,documentElement,xmlEncoding,xmlVersion,xmlStandalone,domain,referrer,cookie,lastModified,readyState,title,dir,body,head,images,embeds,plugins,links,forms,scripts,currentScript,defaultView,designMode,anchors,applets,fgColor,linkColor,vlinkColor,alinkColor,bgColor,all,scrollingElement,hidden,visibilityState,wasDiscarded,prerendering,featurePolicy,webkitVisibilityState,webkitHidden,timeline,fullscreenEnabled,fullscreen,webkitIsFullScreen,webkitCurrentFullScreenElement,webkitFullscreenEnabled,webkitFullscreenElement,rootElement,pictureInPictureEnabled,children,firstElementChild,lastElementChild,childElementCount,activeElement,styleSheets,pointerLockElement,fullscreenElement,adoptedStyleSheets,pictureInPictureElement,fonts,adoptNode,append,captureEvents,caretRangeFromPoint,clear,close,createAttribute,createAttributeNS,createCDATASection,createComment,createDocumentFragment,createElement,createElementNS,createEvent,createExpression,createNSResolver,createNodeIterator,createProcessingInstruction,createRange,createTextNode,createTreeWalker,elementFromPoint,elementsFromPoint,evaluate,execCommand,exitFullscreen,exitPictureInPicture,exitPointerLock,getAnimations,getElementById,getElementsByClassName,getElementsByName,getElementsByTagName,getElementsByTagNameNS,getSelection,hasFocus,hasStorageAccess,importNode,open,prepend,queryCommandEnabled,queryCommandIndeterm,queryCommandState,queryCommandSupported,queryCommandValue,querySelector,querySelectorAll,releaseEvents,replaceChildren,requestStorageAccess,requestStorageAccessFor,startViewTransition,webkitCancelFullScreen,webkitExitFullscreen,write,writeln,fragmentDirective,browsingTopics,hasPrivateToken,hasRedemptionRecord
CharacterData : data,length,previousElementSibling,nextElementSibling,after,appendData,before,deleteData,insertData,remove,replaceData,replaceWith,substringData
DocumentFragment : children,firstElementChild,lastElementChild,childElementCount,append,getElementById,prepend,querySelector,querySelectorAll,replaceChildren
Element : namespaceURI,prefix,localName,tagName,id,className,classList,slot,attributes,shadowRoot,part,assignedSlot,innerHTML,outerHTML,scrollTop,scrollLeft,scrollWidth,scrollHeight,clientTop,clientLeft,clientWidth,clientHeight,elementTiming,role,ariaAtomic,ariaAutoComplete,ariaBusy,ariaBrailleLabel,ariaBrailleRoleDescription,ariaChecked,ariaColCount,ariaColIndex,ariaColSpan,ariaCurrent,ariaDescription,ariaDisabled,ariaExpanded,ariaHasPopup,ariaHidden,ariaInvalid,ariaKeyShortcuts,ariaLabel,ariaLevel,ariaLive,ariaModal,ariaMultiLine,ariaMultiSelectable,ariaOrientation,ariaPlaceholder,ariaPosInSet,ariaPressed,ariaReadOnly,ariaRelevant,ariaRequired,ariaRoleDescription,ariaRowCount,ariaRowIndex,ariaRowSpan,ariaSelected,ariaSetSize,ariaSort,ariaValueMax,ariaValueMin,ariaValueNow,ariaValueText,children,firstElementChild,lastElementChild,childElementCount,previousElementSibling,nextElementSibling,after,animate,append,attachShadow,before,checkVisibility,closest,computedStyleMap,getAnimations,getAttribute,getAttributeNS,getAttributeNames,getAttributeNode,getAttributeNodeNS,getBoundingClientRect,getClientRects,getElementsByClassName,getElementsByTagName,getElementsByTagNameNS,hasAttribute,hasAttributeNS,hasAttributes,hasPointerCapture,insertAdjacentElement,insertAdjacentHTML,insertAdjacentText,matches,prepend,querySelector,querySelectorAll,releasePointerCapture,remove,removeAttribute,removeAttributeNS,removeAttributeNode,replaceChildren,replaceWith,requestFullscreen,requestPointerLock,scroll,scrollBy,scrollIntoView,scrollIntoViewIfNeeded,scrollTo,setAttribute,setAttributeNS,setAttributeNode,setAttributeNodeNS,setPointerCapture,toggleAttribute,webkitMatchesSelector,webkitRequestFullScreen,webkitRequestFullscreen,getInnerHTML,setHTMLUnsafe

HTMLDocument : location
Text : wholeText,assignedSlot,splitText
Comment :
HTMLElement : title,lang,translate,dir,hidden,inert,accessKey,draggable,spellcheck,autocapitalize,contentEditable,enterKeyHint,isContentEditable,inputMode,virtualKeyboardPolicy,offsetParent,offsetTop,offsetLeft,offsetWidth,offsetHeight,popover,innerText,outerText,dataset,nonce,autofocus,tabIndex,style,attributeStyleMap,attachInternals,blur,click,focus,hidePopover,showPopover,togglePopover,writingSuggestions,editContext

HTMLAnchorElement : target,download,ping,rel,relList,hreflang,type,referrerPolicy,text,coords,charset,rev,shape,origin,protocol,username,password,host,hostname,port,pathname,search,hash,href,toString,hrefTranslate,attributionSrc
HTMLAreaElement : alt,coords,download,shape,target,ping,rel,relList,referrerPolicy,noHref,origin,protocol,username,password,host,hostname,port,pathname,search,hash,href,toString
HTMLAudioElement :
HTMLMediaElement : error,src,currentSrc,crossOrigin,networkState,preload,buffered,readyState,seeking,currentTime,duration,paused,defaultPlaybackRate,playbackRate,played,seekable,ended,autoplay,loop,preservesPitch,controls,controlsList,volume,muted,defaultMuted,textTracks,webkitAudioDecodedByteCount,webkitVideoDecodedByteCount,srcObject,NETWORK_EMPTY,NETWORK_IDLE,NETWORK_LOADING,NETWORK_NO_SOURCE,HAVE_NOTHING,HAVE_METADATA,HAVE_CURRENT_DATA,HAVE_FUTURE_DATA,HAVE_ENOUGH_DATA,addTextTrack,canPlayType,captureStream,load,pause,play,sinkId,remote,disableRemotePlayback,setSinkId,mediaKeys,setMediaKeys
HTMLBaseElement : href,target
HTMLBodyElement : text,link,vLink,aLink,bgColor,background
HTMLBRElement : clear
HTMLButtonElement : disabled,form,formAction,formEnctype,formMethod,formNoValidate,formTarget,type,value,willValidate,validity,validationMessage,labels,popoverTargetElement,popoverTargetAction,checkValidity,reportValidity,setCustomValidity
HTMLCanvasElement : width,height,captureStream,getContext,toBlob,toDataURL,transferControlToOffscreen
HTMLDListElement : compact
HTMLDataElement : value
HTMLDataListElement : options
HTMLDetailsElement : open
HTMLDialogElement : open,returnValue,close,show,showModal
HTMLDivElement : align
HTMLFieldSetElement : disabled,form,type,elements,willValidate,validity,validationMessage,checkValidity,reportValidity,setCustomValidity
HTMLFormElement : acceptCharset,action,autocomplete,enctype,encoding,method,noValidate,target,rel,relList,elements,length,checkValidity,reportValidity,requestSubmit,reset,submit
HTMLHeadElement :
HTMLHeadingElement : align
HTMLHtmlElement : version
HTMLIFrameElement : src,srcdoc,sandbox,allowFullscreen,width,height,contentDocument,contentWindow,referrerPolicy,csp,allow,featurePolicy,loading,align,scrolling,frameBorder,longDesc,marginHeight,marginWidth,getSVGDocument,credentialless,allowPaymentRequest,privateToken,browsingTopics,adAuctionHeaders,sharedStorageWritable
HTMLImageElement : alt,src,srcset,sizes,crossOrigin,useMap,isMap,width,height,naturalWidth,naturalHeight,complete,currentSrc,referrerPolicy,decoding,fetchPriority,loading,lowsrc,align,hspace,vspace,longDesc,border,x,y,decode,attributionSrc,sharedStorageWritable
HTMLInputElement : accept,alt,autocomplete,defaultChecked,checked,dirName,disabled,form,files,formAction,formEnctype,formMethod,formNoValidate,formTarget,height,indeterminate,list,max,maxLength,min,minLength,multiple,pattern,placeholder,readOnly,required,size,src,step,type,defaultValue,value,valueAsDate,valueAsNumber,width,willValidate,validity,validationMessage,labels,selectionStart,selectionEnd,selectionDirection,align,useMap,webkitdirectory,incremental,popoverTargetElement,popoverTargetAction,checkValidity,reportValidity,select,setCustomValidity,setRangeText,setSelectionRange,showPicker,stepDown,stepUp,webkitEntries
HTMLLabelElement : form,htmlFor,control
HTMLLegendElement : form,align
HTMLLIElement : value,type
HTMLLinkElement : disabled,href,crossOrigin,rel,relList,media,hreflang,type,as,referrerPolicy,sizes,fetchPriority,imageSrcset,imageSizes,charset,rev,target,sheet,integrity,blocking
HTMLMapElement : areas
HTMLMenuElement : compact
HTMLMetaElement : httpEquiv,content,media,scheme
HTMLMeterElement : value,min,max,low,high,optimum,labels
HTMLOListElement : reversed,start,type,compact
HTMLOptGroupElement : disabled,label
HTMLOptionElement : disabled,form,label,defaultSelected,selected,value,text,index
HTMLOutputElement : htmlFor,form,type,defaultValue,value,willValidate,validity,validationMessage,labels,checkValidity,reportValidity,setCustomValidity
HTMLParagraphElement : align
HTMLParamElement : value,type,valueType
HTMLPictureElement :
HTMLPreElement : width
HTMLProgressElement : value,max,position,labels
HTMLQuoteElement : cite
HTMLScriptElement : src,type,noModule,charset,async,defer,crossOrigin,text,referrerPolicy,fetchPriority,event,htmlFor,integrity,blocking,attributionSrc
HTMLSelectElement : autocomplete,disabled,form,multiple,required,size,type,options,length,selectedOptions,selectedIndex,value,willValidate,validity,validationMessage,labels,add,checkValidity,item,namedItem,remove,reportValidity,setCustomValidity,showPicker
HTMLSourceElement : src,type,srcset,sizes,media,width,height
HTMLSpanElement :
HTMLStyleElement : disabled,media,type,sheet,blocking
HTMLTableElement : caption,tHead,tFoot,tBodies,rows,align,border,frame,rules,summary,width,bgColor,cellPadding,cellSpacing,createCaption,createTBody,createTFoot,createTHead,deleteCaption,deleteRow,deleteTFoot,deleteTHead,insertRow
HTMLTableCaptionElement : align
HTMLTableCellElement : colSpan,rowSpan,headers,cellIndex,align,axis,height,width,ch,chOff,noWrap,vAlign,bgColor,abbr,scope
HTMLTableColElement : span,align,ch,chOff,vAlign,width
HTMLTableSectionElement : rows,align,ch,chOff,vAlign,deleteRow,insertRow
HTMLTemplateElement : content,shadowRootMode,shadowRootDelegatesFocus,shadowRootClonable
HTMLTextAreaElement : autocomplete,cols,dirName,disabled,form,maxLength,minLength,placeholder,readOnly,required,rows,wrap,type,defaultValue,value,textLength,willValidate,validity,validationMessage,labels,selectionStart,selectionEnd,selectionDirection,checkValidity,reportValidity,select,setCustomValidity,setRangeText,setSelectionRange
HTMLTimeElement : dateTime
HTMLTitleElement : text
HTMLTrackElement : kind,src,srclang,label,default,readyState,track,NONE,LOADING,LOADED,ERROR
HTMLUListElement : compact,type
HTMLUnknownElement :
HTMLVideoElement : width,height,videoWidth,videoHeight,poster,webkitDecodedFrameCount,webkitDroppedFrameCount,playsInline,disablePictureInPicture,cancelVideoFrameCallback,requestPictureInPicture,requestVideoFrameCallback,webkitSupportsFullscreen,webkitDisplayingFullscreen,getVideoPlaybackQuality,webkitEnterFullScreen,webkitEnterFullscreen,webkitExitFullScreen,webkitExitFullscreen

HTMLCollection : length,item,namedItem
NodeList : entries,keys,values,forEach,length,item

OnDocument : onreadystatechange,onpointerlockchange,onpointerlockerror,onbeforecopy,onbeforecut,onbeforepaste,onfreeze,onprerenderingchange,onresume,onsearch,onvisibilitychange,onfullscreenchange,onfullscreenerror,onwebkitfullscreenchange,onwebkitfullscreenerror,onbeforexrselect,onabort,onbeforeinput,onbeforematch,onbeforetoggle,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncontentvisibilityautostatechange,oncontextlost,oncontextmenu,oncontextrestored,oncuechange,ondblclick,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,onformdata,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onpause,onplay,onplaying,onprogress,onratechange,onreset,onresize,onscroll,onsecuritypolicyviolation,onseeked,onseeking,onselect,onslotchange,onstalled,onsubmit,onsuspend,ontimeupdate,ontoggle,onvolumechange,onwaiting,onwebkitanimationend,onwebkitanimationiteration,onwebkitanimationstart,onwebkittransitionend,onwheel,onauxclick,ongotpointercapture,onlostpointercapture,onpointerdown,onpointermove,onpointerrawupdate,onpointerup,onpointercancel,onpointerover,onpointerout,onpointerenter,onpointerleave,onselectstart,onselectionchange,onanimationend,onanimationiteration,onanimationstart,ontransitionrun,ontransitionstart,ontransitionend,ontransitioncancel,oncopy,oncut,onpaste,ontouchcancel,ontouchend,ontouchmove,ontouchstart,onscrollend
OnHTMLVideoElement : onenterpictureinpicture,onleavepictureinpicture
OnHTMLElement : onbeforexrselect,onabort,onbeforeinput,onbeforematch,onbeforetoggle,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncontentvisibilityautostatechange,oncontextlost,oncontextmenu,oncontextrestored,oncuechange,ondblclick,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,onformdata,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onpause,onplay,onplaying,onprogress,onratechange,onreset,onresize,onscroll,onsecuritypolicyviolation,onseeked,onseeking,onselect,onslotchange,onstalled,onsubmit,onsuspend,ontimeupdate,ontoggle,onvolumechange,onwaiting,onwebkitanimationend,onwebkitanimationiteration,onwebkitanimationstart,onwebkittransitionend,onwheel,onauxclick,ongotpointercapture,onlostpointercapture,onpointerdown,onpointermove,onpointerrawupdate,onpointerup,onpointercancel,onpointerover,onpointerout,onpointerenter,onpointerleave,onselectstart,onselectionchange,onanimationend,onanimationiteration,onanimationstart,ontransitionrun,ontransitionstart,ontransitionend,ontransitioncancel,oncopy,oncut,onpaste,onscrollend,ontouchcancel,ontouchend,ontouchmove,ontouchstart
OnElement : onbeforecopy,onbeforecut,onbeforepaste,onsearch,onfullscreenchange,onfullscreenerror,onwebkitfullscreenchange,onwebkitfullscreenerror
OnHTMLMediaElement : onencrypted,onwaitingforkey
OnHTMLBodyElement : onblur,onerror,onfocus,onload,onresize,onscroll,onafterprint,onbeforeprint,onbeforeunload,onhashchange,onlanguagechange,onmessage,onmessageerror,onoffline,ononline,onpagehide,onpageshow,onpopstate,onrejectionhandled,onstorage,onunhandledrejection,onunload

# family tree :
    - HTMLDocument <= Document                  <= Node <= EventTarget <= Object <= null
    - Text <= CharacterData                     <= Node <= EventTarget <= Object <= null
    - Comment <= CharacterData                  <= Node <= EventTarget <= Object <= null
    - DocumentFragment                          <= Node <= EventTarget <= Object <= null
    - HTMLXElement <= HTMLElement <= Element    <= Node <= EventTarget <= Object <= null

# types of node :
    - ELEMENT_NODE (1)
    - ATTRIBUTE_NODE (2)
    - TEXT_NODE (3)
    - COMMENT_NODE (8)
    - DOCUMENT_NODE (9)
    - DOCUMENT_type_NODE (9)

# node methods :
    - nodeValue (element node) 	    : null
    - nodeValue (text node) 		: text value
    - nodeValue (attribute node) 	: attribute value

# HTMLCollection : 
    - list of element nodes
    - accessed by name, id, index
    - live collection

# NodeList : 
    - list of all kinds of nodes
    - accessed by index
    - static collection

# toggleAttribute : only for boolean attributes

# element value :
    - textContent (node)      : get text from inside the element (document) and set text to inside the element
    - innerText   (element)   : get text from inside the element (page) and set text to inside the element
    - outerText   (element)   : get text from inside the element (page) and set text in place of element
    - innerHTML   (element)   : get html from inside the element and set html to inside the element
    - outerHTML   (element)   : get html of the element and set html in place of element

# 3 steps of form validation : 
    - constraint validation : max, min, pattern, type, step, required, disabled
    - client side validation
    - server side validation
*/
