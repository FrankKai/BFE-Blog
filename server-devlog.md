**1.9:30抢腾讯云服务器 CVM**  
**2.研究vultr安装node**  
unix安装npm，需要先安装node：  
`curl -L https://www.npmjs.com/install.sh | sh`  
unix安装nodejs，默认捆绑npm：  
`curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`  
`sudo apt-get install -y nodejs`  
unix卸载nodejs，这会导致npm也卸载掉  
`sudo apt-get remove nodejs`  
**3.在腾讯云服务器安装node**  
使用WinScp连接VPS，替代桌面方案。  
安装linux需要管理员权限，因此需要sudo su切换。  
然后apt-get install nodejs，使用第二条中的命令无效。  