(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),b=a(9),r=(a(0),a(186)),c={id:"opc-ua",title:"OPC-UA Adaptor"},l={id:"en/adaptors/opc-ua",title:"OPC-UA Adaptor",description:"## Introduction",source:"@site/docs/en/adaptors/opc-ua.md",permalink:"/docs-octopus/docs/en/adaptors/opc-ua",editUrl:"https://github.com/cnrancher/docs-octopus/tree/master/docs/en/adaptors/opc-ua.md",sidebar:"docs",previous:{title:"Modbus Adaptor",permalink:"/docs-octopus/docs/en/adaptors/modbus"},next:{title:"MQTT Adaptor",permalink:"/docs-octopus/docs/en/adaptors/mqtt"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Registration Information",id:"registration-information",children:[]},{value:"Support Model",id:"support-model",children:[]},{value:"Support Platform",id:"support-platform",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Authority",id:"authority",children:[]},{value:"Example",id:"example",children:[]},{value:"OPCUADevice",id:"opcuadevice",children:[{value:"OPCUADeviceSpec",id:"opcuadevicespec",children:[]},{value:"OPCUADeviceStatus",id:"opcuadevicestatus",children:[]}]}],p={rightToc:i};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://opcfoundation.org/about/opc-technologies/opc-ua/"}),"OPC Unified Architecture")," (OPC-UA) is a machine to machine communication protocol for industrial automation developed by the OPC Foundation."),Object(r.b)("p",null,"OPC-UA adaptor implements on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gopcua/opcua"}),"gopcua/opcua")," and focus on communicating with the industrial OPC-UA equipment and systems for data collection and data manipulation on the edge side."),Object(r.b)("h2",{id:"registration-information"},"Registration Information"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Versions"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Register Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Endpoint Socket"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Available"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"v1alpha1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"adaptors.edge.cattle.io/opcua")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"opcua.sock")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*")))),Object(r.b)("h2",{id:"support-model"},"Support Model"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Kind"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Group"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Version"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Available"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"OPCUADevice")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"devices.edge.cattle.io")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"v1alpha1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*")))),Object(r.b)("h2",{id:"support-platform"},"Support Platform"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"OS"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Arch"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"linux")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"amd64"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"linux")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"arm"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"linux")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"arm64"))))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/adaptors/opcua/deploy/e2e/all_in_one.yaml\n")),Object(r.b)("h2",{id:"authority"},"Authority"),Object(r.b)("p",null,"Grant permissions to Octopus as below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"  Resources                                   Non-Resource URLs  Resource Names  Verbs\n  ---------                                   -----------------  --------------  -----\n  opcuadevices.devices.edge.cattle.io         []                 []              [create delete get list patch update watch]\n  opcuadevices.devices.edge.cattle.io/status  []                 []              [get patch update]\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Specifies a ",Object(r.b)("inlineCode",{parentName:"p"},"OPCUADevice")," device link to connect a OPC-UA server."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: edge.cattle.io/v1alpha1\nkind: DeviceLink\nmetadata:\n  name: opcua\nspec:\n  adaptor:\n    node: edge-worker\n    name: adaptors.edge.cattle.io/opcua\n  model:\n    apiVersion: "devices.edge.cattle.io/v1alpha1"\n    kind: "OPCUADevice"\n  template:\n    metadata:\n      labels:\n        device: opcua\n    spec:\n      parameters:\n        syncInterval: 5s\n        timeout: 10s\n      protocol:\n        # replace the address if needed\n        endpoint: opc.tcp://10.43.29.71:4840/\n      properties:\n        - name: datetime\n          description: the current datetime\n          readOnly: true\n          visitor:\n            nodeID: ns=0;i=2258\n          type: datetime\n        - name: integer\n          description: mock number. Default value is 42\n          readOnly: false\n          visitor:\n            nodeID: ns=1;s=the.answer\n          type: int32\n          value: "1"\n        - name: string\n          description: mock byte string. Default value is "test123"\n          readOnly: false\n          visitor:\n            nodeID: ns=1;s=myByteString\n          type: byteString\n          value: "newString"\n')))),Object(r.b)("p",null,"For more ",Object(r.b)("inlineCode",{parentName:"p"},"OPCUADevice")," device link examples, please refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cnrancher/octopus/tree/master/adaptors/opcua/deploy/e2e"}),"deploy/e2e")," directory."),Object(r.b)("h2",{id:"opcuadevice"},"OPCUADevice"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Schema"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metadata"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/kubernetes/apimachinery/blob/master/pkg/apis/meta/v1/types.go#L110"}),"metav1.ObjectMeta")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spec"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the desired state of ",Object(r.b)("inlineCode",{parentName:"td"},"OPCUADevice"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadevicespec"}),"OPCUADeviceSpec")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the observed state of ",Object(r.b)("inlineCode",{parentName:"td"},"OPCUADevice"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadevicestatus"}),"OPCUADeviceStatus")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h3",{id:"opcuadevicespec"},"OPCUADeviceSpec"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"extension"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the extension of device."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadeviceextension"}),"OPCUADeviceExtension")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parameters"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the parameters of device."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadeviceparamters"}),"OPCUADeviceParamters")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"protocol"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the protocol for accessing the device."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadeviceprotocol"}),"OPCUADeviceProtocol")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"properties"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the properties of device."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadeviceproperty"}),"[]OPCUADeviceProperty")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h3",{id:"opcuadevicestatus"},"OPCUADeviceStatus"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"properties"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reports the properties of device."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadevicestatusproperty"}),"[]OPCUADeviceStatusProperty")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"opcuadeviceparamters"},"OPCUADeviceParamters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"syncInterval"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the amount of interval that synchronized to limb, default to ",Object(r.b)("inlineCode",{parentName:"td"},"15s"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timeout"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the amount of timeout, default to ",Object(r.b)("inlineCode",{parentName:"td"},"10s"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"opcuadeviceprotocol"},"OPCUADeviceProtocol"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endpoint"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Specifies the URL of OPC-UA server endpoint, which is start with "opc.tcp://".'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"securityPolicy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the security policy for accessing OPC-UA server, default to ",Object(r.b)("inlineCode",{parentName:"td"},"None"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadeviceprotocolsecuritypolicy"}),"OPCUADeviceProtocolSecurityPolicy")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"securityMode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the security mode for accessing OPC-UA server, default to ",Object(r.b)("inlineCode",{parentName:"td"},"None"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadeviceprotocolsecuritymode"}),"OPCUADeviceProtocolSecurityMode")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"basicAuth"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the username and password that the client connects to OPC-UA server."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadeviceprotocolbasicauth"}),"OPCUADeviceProtocolBasicAuth")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tlsConfig"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the TLS configuration that the client connects to OPC-UA server."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadeviceprotocoltls"}),"OPCUADeviceProtocolTLS")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"opcuadeviceprotocolsecuritypolicy"},"OPCUADeviceProtocolSecurityPolicy"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Basic128Rsa15"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Basic256"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Basic256Sha256"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Aes128Sha256RsaOaep"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Aes256Sha256RsaPss"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("h4",{id:"opcuadeviceprotocolsecuritymode"},"OPCUADeviceProtocolSecurityMode"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sign"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SignAndEncrypt"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("h4",{id:"opcuadeviceprotocolbasicauth"},"OPCUADeviceProtocolBasicAuth"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the username for accessing OPC-UA server."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"usernameRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the relationship of DeviceLink's references to refer to the value as the username."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/cnrancher/octopus/blob/master/api/v1alpha1/devicelink_types.go#L12"}),"edgev1alpha1.DeviceLinkReferenceRelationship")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the password for accessing OPC-UA server."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"passwordRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the relationship of DeviceLink's references to refer to the value as the password."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/cnrancher/octopus/blob/master/api/v1alpha1/devicelink_types.go#L12"}),"edgev1alpha1.DeviceLinkReferenceRelationship")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"opcuadeviceprotocoltls"},"OPCUADeviceProtocolTLS"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certFilePEM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the PEM format content of the certificate(public key), which is used for client authenticate to the OPC-UA server."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"certFilePEMRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the relationship of DeviceLink's references to refer to the value as the client certificate file PEM content."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/cnrancher/octopus/blob/master/api/v1alpha1/devicelink_types.go#L12"}),"edgev1alpha1.DeviceLinkReferenceRelationship")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyFilePEM"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the PEM format content of the key(private key), which is used for client authenticate to the OPC-UA server."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyFilePEMRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the relationship of DeviceLink's references to refer to the value as the client key file PEM content."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/cnrancher/octopus/blob/master/api/v1alpha1/devicelink_types.go#L12"}),"edgev1alpha1.DeviceLinkReferenceRelationship")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"opcuadeviceproperty"},"OPCUADeviceProperty"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the name of property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the description of property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the type of property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadevicepropertytype"}),"OPCUADevicePropertyType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visitor"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the visitor of property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#opcuadevicepropertyvisitor"}),"OPCUADevicePropertyVisitor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readOnly"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies if the property is readonly, default is ",Object(r.b)("inlineCode",{parentName:"td"},"false"),"."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the value of property, only available in the writable property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"opcuadevicestatusproperty"},"OPCUADeviceStatusProperty"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reports the name of property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reports the type of property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#modbusdevicepropertytype"}),"OPCUADevicePropertyType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reports the value of property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"updatedAt"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reports the updated timestamp of property."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/kubernetes/apimachinery/blob/master/pkg/apis/meta/v1/time.go#L33"}),"metav1.Time")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"opcuadevicepropertyvisitor"},"OPCUADevicePropertyVisitor"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodeID"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Specifies the id of OPC-UA node, e.g. "ns=1,i=1005".'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"browseName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the name of OPC-UA node."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"opcuadevicepropertytype"},"OPCUADevicePropertyType"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is boolean."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is int64."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is int32."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int16"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is int16."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint64"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is uint64."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint32"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is uint32."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint16"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is uint16."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is float."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"double"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is double."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is string."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"byteString"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is bytestring. Will be converted to string for display."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"datetime"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type is datetime."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("h4",{id:"opcuadeviceextension"},"OPCUADeviceExtension"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mqtt"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the MQTT settings."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"./mqtt-extension#specification"}),"v1alpha1.MQTTOptionsSpec")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))))}O.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),O=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=O(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),j=O(a),d=n,m=j["".concat(c,".").concat(d)]||j[d]||o[d]||r;return a?b.a.createElement(m,l({ref:t},p,{components:a})):b.a.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);