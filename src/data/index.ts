import menuInfo from './menu-info.json'
import { addCollection } from "iconify-icon";
 
const preInstall = async () => { 
  // setTimeout(() => { addCollection(menuInfo); }, 10000)
  // 后续从接口中获取
   addCollection(menuInfo);
};

preInstall();
