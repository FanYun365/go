var DEVICE_DATA_ID=0,SYSTEM_DATA_ID=1,SYSTEM_LOG_DATA_ID=2,EXCEPT_LOG_DATA_ID=3,LAN_DATA_ID=4,LCLPORT_DATA_ID=5,LCLHOST_DATA_ID=6,RMTHOST_DATA_ID=7,DHCPS_DATA_ID=8,DHCPS_LEASE_DATA_ID=9,TPDOMAIN_DATA_ID=10,FACTORY_DATA_ID=11,STACTRLTBL_DATA_ID=12,STARTTABLE_DATA_ID=13,STATIC_ROUTE_DATA_ID=14,DYNAMIC_ROUTE_DATA_ID=15,SYSTEM_ROUTE_DATA_ID=16,NAPT_ALG_DATA_ID=17,NAPT_DMZ_DATA_ID=18,NAPT_IGD_DATA_ID=19,NAPT_IGD_MAPPING_DATA_ID=20,NAPT_VSERVER_DATA_ID=21,LINK_DATA_ID=22,LINK_STATUS_DATA_ID=23,STATIC_IP_DATA_ID=
24,DHCPC_DATA_ID=25,PPPOE_DATA_ID=26,PPPOE_LASTDIAL_DATA_ID=27,SNTPC_CONFIG_DATA_ID=28,SNTPC_TIME_DATA_ID=29,PEANUTHULL_DATA_ID=30,PEANUTHULL_STATUS_DATA_ID=31,PARENT_CTL_DATA_ID=32,BEHAVMANG_CONFIG_DATA_ID=33,WLAN_BASIC_DATA_ID=34,MBSSID_MAIN_DATA_ID=35,MBSSID_IPTV_DATA_ID=36,MBSSID_GUESTNET_DATA_ID=37,WLAN_AP_LIST_DATA_ID=38;
function DataBlock(){this.DEVICE={id:DEVICE_DATA_ID,fullName:"",facturer:"",modelName:"",modelVer:"",softVer:"",hardVer:"",prodId:"",languId:"",countryId:"",mainVer:"",minorVer:"",oemId:""};this.SYSTEM={id:SYSTEM_DATA_ID,authKey:"",setWzd:"",mode:"",logLevel:"",fastpath:"",mac:[]};this.SYSTEM_LOG={id:SYSTEM_LOG_DATA_ID,num:"",list:[{level:"",days:"",hours:"",mins:"",secs:"",msecs:"",msg:""}]};this.EXCEPT_LOG={id:EXCEPT_LOG_DATA_ID,num:"",list:[{msg:""}]};this.LAN={id:LAN_DATA_ID,ip:"",mask:"",mode:""};
this.LCLPORT={id:LCLPORT_DATA_ID,port:""};this.LCLHOST={id:LCLHOST_DATA_ID,enableAll:"",mac:[]};this.RMTHOST={id:RMTHOST_DATA_ID,port:"",rule:"",addr:""};this.DHCPS={id:DHCPS_DATA_ID,enable:"",poolStart:"",poolEnd:"",leaseTime:"",dns:[],gateway:"",hostName:""};this.DHCPS_LEASE={id:DHCPS_LEASE_DATA_ID,list:[{hostName:"",mac:"",reserved:"",state:"",ip:"",expires:""}]};this.TPDOMAIN={id:TPDOMAIN_DATA_ID,enable:"",name:""};this.FACTORY={id:FACTORY_DATA_ID,lanIp:"",lanMask:"",authKey:""};this.STACTRLTBL=
{id:STACTRLTBL_DATA_ID,list:[{ip:"",mac:"",reserved:"",bindEntry:"",staMgtEntry:"",name:"",blocked:"",upLimit:"",downLimit:""}]};this.STARTTABLE={id:STARTTABLE_DATA_ID,list:[{ip:"",mac:"",reserved:"",bindEntry:"",staMgtEntry:"",type:"",online:"",blocked:"",up:"",down:"",upLimit:"",downLimit:"",name:""}]};this.STATIC_ROUTE={id:STATIC_ROUTE_DATA_ID,list:[{enable:"",net:"",mask:"",gateway:""}]};this.DYNAMIC_ROUTE={id:DYNAMIC_ROUTE_DATA_ID,list:[{net:"",mask:"",gateway:""}]};this.SYSTEM_ROUTE={id:SYSTEM_ROUTE_DATA_ID,
list:[{net:"",gateway:"",mask:"",netif:""}]};this.NAPT_ALG={id:NAPT_ALG_DATA_ID,ftpAlgEnable:"",pptpAlgEnable:"",rtspAlgEnable:"",sipAlgEnable:"",ipsecAlgEnable:"",h323AlgEnable:""};this.NAPT_DMZ={id:NAPT_DMZ_DATA_ID,dmzEnable:"",dmzClient:""};this.NAPT_IGD={id:NAPT_IGD_DATA_ID,igdEnable:""};this.NAPT_IGD_MAPPING={id:NAPT_IGD_MAPPING_DATA_ID,num:"",list:[{extPort:"",intPort:"",ptc:"",enabled:"",leaseDuration:"",leaseTimer:"",rmtHost:"",client:"",desc:""}]};this.NAPT_VSERVER={id:NAPT_VSERVER_DATA_ID,
list:[{vsEntryEnable:"",vsLclIp:"",vsRmtIp:"",vsLclPort:"",vsRmtPort:"",vsOpenPortS:"",vsOpenPortE:"",vsPtc:""}]};this.LINK={id:LINK_DATA_ID,linkMode:"",linkType:""};this.LINK_STATUS={id:LINK_STATUS_DATA_ID,ip:"",mask:"",gateway:"",dns:[],status:"",code:"",upTime:"",inPkts:"",inOctets:"",outPkts:"",outOctets:"",inRates:"",outRates:""};this.STATIC_IP={id:STATIC_IP_DATA_ID,ip:"",mask:"",gateway:"",dns:[],mtu:""};this.DHCPC={id:DHCPC_DATA_ID,name:"",dns:[],mtu:"",ucast:"",manualDns:""};this.PPPOE={id:PPPOE_DATA_ID,
svName:"",acName:"",name:"",paswd:"",fixipEnb:"",fixip:"",manualDns:"",dns:[],lcpMru:"",linkType:"",dialMode:"",maxIdleTime:""};this.PPPOE_LASTDIAL={id:PPPOE_LASTDIAL_DATA_ID,acMac:"",reserved:"",sessionid:"",dialMode:"",ncTimes:""};this.SNTPC_CONFIG={id:SNTPC_CONFIG_DATA_ID,timeZone:""};this.SNTPC_TIME={id:SNTPC_TIME_DATA_ID,year:"",month:"",day:"",hour:"",minute:"",second:"",sntpcSuccess:""};this.PEANUTHULL={id:PEANUTHULL_DATA_ID,autoConnect:"",name:"",password:""};this.PEANUTHULL_STATUS={id:PEANUTHULL_STATUS_DATA_ID,
status:"",type:"",num:"",domains:[]};this.PARENT_CTL={id:PARENT_CTL_DATA_ID,enable:"",mon:"",tue:"",wed:"",thu:"",fri:"",sat:"",sun:"",list:[{mac:"",reserved:""}]};this.BEHAVMANG_CONFIG={id:BEHAVMANG_CONFIG_DATA_ID,bhavEnable:"",bhavRule:"",rList:[{rName:"",rActive:"",rHost:"",rTarget:"",rSchedule:"",rReserved:""}],hList:[{hIsIp:"",hName:"",hIpStart:"",hIpEnd:"",hMac:"",hReserved:""}],tList:[{tType:"",tName:"",tIpStart:"",tIpEnd:"",tPortStart:"",tPortEnd:"",tProto:"",tUrl0:"",tUrl1:"",tUrl2:"",tUrl3:""}],
sList:[{sName:"",sActive:"",sMon:"",sTue:"",sWed:"",sThu:"",sFri:"",sSat:"",sSun:""}]};this.WLAN_BASIC={id:WLAN_BASIC_DATA_ID,bEnabled:"",uApMode:"",uRegionIndex:"",uChannel:"",uBgnMode:"",uChannelWidth:"",adv:{uRTSThreshold:"",uFragThreashold:"",uBeaconInterval:"",uPower:"",uDTIMInterval:"",bWMEEnabled:"",bIsolationEnabled:"",bShortPrmbleDisabled:"",bShortGI:""},apc:{bBridgeEnabled:"",cBridgedSsid:"",cBridgedBssid:"",uWepIndex:"",uSecurityType:"",cPassWD:"",uDetect:""},bTurboOn:""};this.MBSSID_MAIN=
{id:MBSSID_MAIN_DATA_ID,uRadiusIp:"",uRadiusGKUpdateIntvl:"",uPskGKUpdateIntvl:"",privacyRcd:[{uKeyLength:"",cKeyVal:""}],uRadiusPort:"",uKeyType:"",uDefaultKey:"",bEnable:"",bBcastSsid:"",cSsid:"",bSecurityEnable:"",uAuthType:"",uWEPSecOpt:"",uRadiusSecOpt:"",uPSKSecOpt:"",uRadiusEncryptType:"",uPSKEncryptType:"",cRadiusSecret:"",cPskSecret:"",bSecCheck:"",wps:{bEnabled:"",cUsrPIN:"",bConfigured:"",bIsLocked:""}};this.MBSSID_IPTV={id:MBSSID_IPTV_DATA_ID,uRadiusIp:"",uRadiusGKUpdateIntvl:"",uPskGKUpdateIntvl:"",
privacyRcd:[{uKeyLength:"",cKeyVal:""}],uRadiusPort:"",uKeyType:"",uDefaultKey:"",bEnable:"",bBcastSsid:"",cSsid:"",bSecurityEnable:"",uAuthType:"",uWEPSecOpt:"",uRadiusSecOpt:"",uPSKSecOpt:"",uRadiusEncryptType:"",uPSKEncryptType:"",cRadiusSecret:"",cPskSecret:"",bSecCheck:"",wps:{bEnabled:"",cUsrPIN:"",bConfigured:"",bIsLocked:""}};this.MBSSID_GUESTNET={id:MBSSID_GUESTNET_DATA_ID,uRadiusIp:"",uRadiusGKUpdateIntvl:"",uPskGKUpdateIntvl:"",privacyRcd:[{uKeyLength:"",cKeyVal:""}],uRadiusPort:"",uKeyType:"",
uDefaultKey:"",bEnable:"",bBcastSsid:"",cSsid:"",bSecurityEnable:"",uAuthType:"",uWEPSecOpt:"",uRadiusSecOpt:"",uPSKSecOpt:"",uRadiusEncryptType:"",uPSKEncryptType:"",cRadiusSecret:"",cPskSecret:"",bSecCheck:"",wps:{bEnabled:"",cUsrPIN:"",bConfigured:"",bIsLocked:""},bLanAccess:"",uDuration:"",bSetOpenTime:"",uMaxUploadSpeed:"",uMaxDownloadSpeed:"",uAllowTimeMode:"",uTimeTable:[]};this.WLAN_AP_LIST={id:WLAN_AP_LIST_DATA_ID,apEntry:[{cBssid:"",cSsid:"",uRssi:"",uChannel:"",uAuthMode:"",uBgnMode:"",
uChanWidth:""}],uApCnt:""}};
