 export interface scraper{

 title:string;
url:string;
body:string;
keyWordOne:string;
keyWordTwo:string;
keyWordThree:string;
status:number;
time:string;
keysFound:number;
key1Found:boolean;
key2Found:Boolean;
key3Found:Boolean;
links:Set<string>;
images:Set<string>;
setOne:Set<string>;
setTwo:Set<string>;
setThree:Set<string>;
numericalValues:Set<string>;
bodyLength:number;
 }
