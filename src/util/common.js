function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

export function replaceTextarea(value){
  return value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
}

export function replaceTextareaForView(value){
  if(value !== undefined){
    return replaceAll(value, '<br/>', '\r\n');
  } else{
    return ''
  }
}