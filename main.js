[
    {
        "id": "e08239b7.a99ba8",
        "type": "tab",
        "label": "Flow 1"
    },
    {
        "id": "c2faeef7.f0661",
        "type": "tab",
        "label": "Flow 2"
    },
    {
        "id": "7cce9d48.8fa294",
        "type": "ui_base",
        "theme": {
            "name": "theme-dark",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "Helvetica Neue",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#cade42",
                "baseFont": "Helvetica Neue",
                "edited": true,
                "reset": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#cade42",
                "baseFont": "Helvetica Neue",
                "reset": false
            },
            "themeState": {
                "base-color": {
                    "default": "#097479",
                    "value": "#097479",
                    "edited": false
                },
                "page-titlebar-backgroundColor": {
                    "value": "#cade42",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#111111",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#dce983",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#555555",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#333333",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#eeeeee",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#cade42",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#333333",
                    "edited": false
                }
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "false",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "f2029026.7aa96",
        "type": "ui_tab",
        "z": "",
        "name": "Form de Testes",
        "icon": "pets",
        "order": 1
    },
    {
        "id": "cbe49904.9a3bb8",
        "type": "ui_group",
        "z": "",
        "name": "Entrada",
        "tab": "f2029026.7aa96",
        "order": 1,
        "disp": true,
        "width": "6"
    },
    {
        "id": "c53bcc23.de15e",
        "type": "ui_group",
        "z": "",
        "name": "Erros",
        "tab": "f2029026.7aa96",
        "order": 2,
        "disp": true,
        "width": "6"
    },
    {
        "id": "d1bb9c9b.01a14",
        "type": "ui_group",
        "z": "",
        "name": "Conclusão",
        "tab": "f2029026.7aa96",
        "order": 3,
        "disp": true,
        "width": "6"
    },
    {
        "id": "c55c31e5.35a65",
        "type": "ui_tab",
        "name": "Tab 2",
        "icon": "dashboard",
        "order": 2
    },
    {
        "id": "d8cf7656.a53a58",
        "type": "ui_group",
        "z": "",
        "name": "Group 2",
        "tab": "c55c31e5.35a65",
        "order": 1,
        "disp": true,
        "width": "6"
    },
    {
        "id": "7c14fc82.e4f9f4",
        "type": "ui_date_picker",
        "z": "e08239b7.a99ba8",
        "name": "taskDate",
        "label": "Testado em",
        "group": "cbe49904.9a3bb8",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "topic": "",
        "x": 280,
        "y": 180,
        "wires": [
            [
                "3a27f0e1.5f557"
            ]
        ]
    },
    {
        "id": "7b27e8e9.6621a8",
        "type": "comment",
        "z": "e08239b7.a99ba8",
        "name": "Entrada",
        "info": "",
        "x": 270,
        "y": 60,
        "wires": []
    },
    {
        "id": "1192f4a5.e26aab",
        "type": "comment",
        "z": "e08239b7.a99ba8",
        "name": "Conclusão",
        "info": "",
        "x": 280,
        "y": 460,
        "wires": []
    },
    {
        "id": "67ba6855.3987f8",
        "type": "comment",
        "z": "e08239b7.a99ba8",
        "name": "Erros",
        "info": "",
        "x": 270,
        "y": 300,
        "wires": []
    },
    {
        "id": "d253454f.1839a8",
        "type": "ui_numeric",
        "z": "e08239b7.a99ba8",
        "name": "numHpe",
        "label": "Erros no caminho feliz",
        "group": "c53bcc23.de15e",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "topic": "",
        "format": "{{value}}",
        "min": 0,
        "max": "50",
        "step": 1,
        "x": 280,
        "y": 380,
        "wires": [
            [
                "8050f810.ea43f8"
            ]
        ]
    },
    {
        "id": "7cc5b0ac.61341",
        "type": "ui_numeric",
        "z": "e08239b7.a99ba8",
        "name": "numError",
        "label": "Número de erros",
        "group": "c53bcc23.de15e",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "topic": "",
        "format": "{{value}}",
        "min": 0,
        "max": "50",
        "step": 1,
        "x": 280,
        "y": 340,
        "wires": [
            [
                "d79ea7e0.68edd8"
            ]
        ]
    },
    {
        "id": "28d0ee1f.62cf02",
        "type": "ui_numeric",
        "z": "e08239b7.a99ba8",
        "name": "numReic",
        "label": "Número de reincidentes",
        "group": "c53bcc23.de15e",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "topic": "",
        "format": "{{value}}",
        "min": 0,
        "max": "50",
        "step": 1,
        "x": 280,
        "y": 420,
        "wires": [
            [
                "893e0c4b.90d15"
            ]
        ]
    },
    {
        "id": "78b0a4a9.e1421c",
        "type": "ui_text_input",
        "z": "e08239b7.a99ba8",
        "name": "taskEnd",
        "label": "Finalização da tarefa",
        "group": "d1bb9c9b.01a14",
        "order": 0,
        "width": "3",
        "height": "1",
        "passthru": false,
        "mode": "text",
        "delay": "300",
        "topic": "task-end",
        "x": 280,
        "y": 500,
        "wires": [
            [
                "4d4af228.782c3c"
            ]
        ]
    },
    {
        "id": "b6aff508.c5dd58",
        "type": "ui_text_input",
        "z": "e08239b7.a99ba8",
        "name": "taskHunt",
        "label": "Duração estimada",
        "group": "cbe49904.9a3bb8",
        "order": 5,
        "width": "3",
        "height": "1",
        "passthru": false,
        "mode": "text",
        "delay": 300,
        "topic": "",
        "x": 280,
        "y": 260,
        "wires": [
            [
                "b86550e3.ac0a8"
            ]
        ]
    },
    {
        "id": "7cc5849d.0fd5bc",
        "type": "ui_text_input",
        "z": "e08239b7.a99ba8",
        "name": "taskNum",
        "label": "Número da tarefa",
        "group": "cbe49904.9a3bb8",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": 300,
        "topic": "",
        "x": 280,
        "y": 100,
        "wires": [
            [
                "734c5a8a.964a44"
            ]
        ]
    },
    {
        "id": "dbf73eb2.edfbd",
        "type": "ui_text_input",
        "z": "e08239b7.a99ba8",
        "name": "taskStart",
        "label": "Inicio da tarefa",
        "group": "cbe49904.9a3bb8",
        "order": 4,
        "width": "3",
        "height": "1",
        "passthru": false,
        "mode": "text",
        "delay": 300,
        "topic": "task-start",
        "x": 280,
        "y": 220,
        "wires": [
            [
                "4d4af228.782c3c"
            ]
        ]
    },
    {
        "id": "734c5a8a.964a44",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateNum",
        "func": "let num = msg.payload\nlet regex = /[^0-9]/g\n\nvar sheet = flow.get('sheet')||{};\n\nif(!regex.test(num) && num.length > 0)\n{\n    sheet[\"taskNum\"] = num\n} else {sheet[\"topic\"] = \"invalid\"}\n\nflow.set(\"sheet\", sheet)\n\n//return sheet\n",
        "outputs": "1",
        "noerr": 0,
        "x": 670,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "b86550e3.ac0a8",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateHunt",
        "func": "var sheet = flow.get('sheet') || {}\n\nlet time = msg.payload\n\nlet regeHour = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/g\nlet regexMin = /[0-5][0-9]/g\nlet regex\n\nlet size = time.length\n\nif(size < 1 || size > 5)\n{\n    sheet['topic'] = \"invalid\"\n    sheet['taskHunt'] = time\n}\nelse if(size >= 4 && size <= 5) {regex = regeHour}\nelse if(size >= 1 && size <= 2) {regex = regexMin }\n\nif(sheet['topic'] != \"invalid\")\n{\n    try {\n        if(regex.test(time)){\n            sheet['taskHunt'] = time\n        }\n        else {sheet['topic'] = \"invalid\"}\n        \n    } catch (e) {sheet['topic'] = \"invalid\"}\n    \n}\n\nflow.set('sheet',sheet)\n//return newMsg\n\n\n",
        "outputs": "1",
        "noerr": 0,
        "x": 670,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "4d4af228.782c3c",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateStartEnd",
        "func": "let time = msg.payload\nlet regex = /(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9])/g\n\nlet newMsg = { payload: time}\n\nregex.test(time)\nif(regex.lastIndex == 0)    //sucesso\n{\n    newMsg[\"topic\"] = \"invalid\"\n} else {newMsg[\"topic\"] = \"valid\"}\n\nlet toReturn = []\nif(msg.topic == \"task-start\") {toReturn = [newMsg, null]}\nelse if(msg.topic == \"task-end\") {toReturn = [null, newMsg]}\nreturn toReturn\n",
        "outputs": "2",
        "noerr": 0,
        "x": 460,
        "y": 300,
        "wires": [
            [
                "712548da.9885d8"
            ],
            [
                "37e969b4.240576"
            ]
        ]
    },
    {
        "id": "43d92fee.d307a",
        "type": "ui_button",
        "z": "e08239b7.a99ba8",
        "name": "taskSubmit",
        "group": "d1bb9c9b.01a14",
        "order": 0,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "submit",
        "color": "",
        "bgcolor": "",
        "icon": "check",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 290,
        "y": 540,
        "wires": [
            [
                "26965c6d.2fd4a4",
                "2f801117.db694e"
            ]
        ]
    },
    {
        "id": "6de4277c.304cf8",
        "type": "ui_dropdown",
        "z": "e08239b7.a99ba8",
        "name": "taskTester",
        "label": "Testador",
        "place": "Select option",
        "group": "cbe49904.9a3bb8",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "options": [
            {
                "label": "Álvaro portela",
                "value": "Alvaro Portela",
                "type": "str"
            },
            {
                "label": "Angele Louise",
                "value": "Angele Louise",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 290,
        "y": 140,
        "wires": [
            [
                "69c810db.6df3d"
            ]
        ]
    },
    {
        "id": "f9f17234.5a23b",
        "type": "http request",
        "z": "e08239b7.a99ba8",
        "name": "",
        "method": "use",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 670,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "106f6e95.30ada1",
        "type": "inject",
        "z": "c2faeef7.f0661",
        "name": "Tick",
        "topic": "",
        "payload": "",
        "repeat": "",
        "crontab": "*/5 * * * *",
        "once": false,
        "x": 110,
        "y": 180,
        "wires": [
            [
                "57c7d9c0.7f5e58"
            ]
        ]
    },
    {
        "id": "57c7d9c0.7f5e58",
        "type": "http request",
        "z": "c2faeef7.f0661",
        "name": "UK Power",
        "method": "GET",
        "url": "http://realtimeweb-prod.nationalgrid.com/SystemData.aspx",
        "tls": "",
        "x": 250,
        "y": 180,
        "wires": [
            [
                "49bbf40d.eff1bc"
            ]
        ]
    },
    {
        "id": "49bbf40d.eff1bc",
        "type": "function",
        "z": "c2faeef7.f0661",
        "name": "UK Power Demand",
        "func": "// does a simple text extract parse of the http output to provide an\n// object containing the uk power demand, frequency and time\n\nif (~msg.payload.indexOf('<span')) {\n    var dem = msg.payload.split('Demand:')[1].split(\"MW\")[0];\n    var fre = msg.payload.split('Frequency:')[1].split(\"Hz\")[0];\n\n    msg.payload = {};\n    msg.payload.demand = parseInt(dem.split(\">\")[1].split(\"<\")[0]);\n    msg.payload.frequency = parseFloat(fre.split(\">\")[1].split(\"<\")[0]);\n    \n    msg2 = {};\n    msg2.payload = (msg.payload.frequency >= 50) ? true : false;\n\n    return [msg,msg2];\n}\n\nreturn null;",
        "outputs": "2",
        "noerr": 0,
        "x": 427,
        "y": 180,
        "wires": [
            [
                "a66224af.549dd8"
            ],
            [
                "24ac0693.19d0ba"
            ]
        ]
    },
    {
        "id": "a66224af.549dd8",
        "type": "debug",
        "z": "c2faeef7.f0661",
        "name": "",
        "active": false,
        "complete": false,
        "x": 627,
        "y": 150,
        "wires": []
    },
    {
        "id": "24ac0693.19d0ba",
        "type": "debug",
        "z": "c2faeef7.f0661",
        "name": "",
        "active": false,
        "complete": false,
        "x": 628,
        "y": 221,
        "wires": []
    },
    {
        "id": "69c810db.6df3d",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateTester",
        "func": "var sheet = flow.get('sheet')||{}\n\nsheet[\"taskTester\"] = msg.payload\n\nflow.set(\"sheet\", sheet)\n\n//return sheet\n",
        "outputs": 1,
        "noerr": 0,
        "x": 680,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "2fc95775.2647a8",
        "type": "ui_form",
        "z": "c2faeef7.f0661",
        "name": "",
        "label": "",
        "group": "d8cf7656.a53a58",
        "order": 0,
        "width": 0,
        "height": 0,
        "options": [
            {
                "label": "Nome do Testador",
                "value": "text",
                "type": "text",
                "required": true
            },
            {
                "label": "Adicionar Testador",
                "value": "add",
                "type": "checkbox",
                "required": false
            },
            {
                "label": "Remover testador",
                "value": "rem",
                "type": "checkbox",
                "required": false
            }
        ],
        "formValue": {
            "text": "",
            "add": false,
            "rem": false
        },
        "payload": "",
        "topic": "",
        "x": 200,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "3a27f0e1.5f557",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateDate",
        "func": "var sheet = flow.get('sheet') || {}\n\nlet date = new Date(msg.payload)\ndate =\"\" + date\ndate = date.substring(4, 15).split(\" \")\n\nlet day = date[1]\nlet mon = date[0]\nlet yea = date[2]\n\n\nswitch(mon/*.toLocaleLowerCase()*/){\n    case \"Jan\": mon = 1 ;   break;\n    case \"Feb\": mon = 2 ;   break;\n    case \"Mar\": mon = 3 ;   break;\n    case \"Apr\": mon = 4 ;   break;\n    case \"May\": mon = 5 ;   break;\n    case \"Jun\": mon = 6 ;   break;\n    case \"Jul\": mon = 7 ;   break;\n    case \"Aug\": mon = 8 ;   break;\n    case \"Sep\": mon = 9 ;   break;\n    case \"Oct\": mon = 1 ;   break;\n    case \"Nov\": mon = 11;   break;\n    case \"Dec\": mon = 12;   break;\n    default   : mon = -1;   break;\n}\n\ndate = day + \"/\" + mon + \"/\" + yea\n\nsheet[\"taskDate\"] = date\nflow.set('sheet', sheet)\n//return date\n",
        "outputs": 1,
        "noerr": 0,
        "x": 670,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "712548da.9885d8",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateStart",
        "func": "var sheet = flow.get('sheet') || {}\n\nsheet[\"taskStart\"] = msg.payload\n\nflow.set('sheet',sheet)\n//return newMsg\n",
        "outputs": 1,
        "noerr": 0,
        "x": 670,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "37e969b4.240576",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateEnd",
        "func": "var sheet = flow.get('sheet') || {}\n\nsheet[\"taskEnd\"] = msg.payload\n\nflow.set('sheet',sheet)\n//return newMsg\n",
        "outputs": 1,
        "noerr": 0,
        "x": 670,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "54293bea.0b9f54",
        "type": "debug",
        "z": "e08239b7.a99ba8",
        "name": "debug",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 650,
        "y": 500,
        "wires": []
    },
    {
        "id": "8050f810.ea43f8",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateHpe",
        "func": "var sheet = flow.get('sheet')||{}\n\nsheet[\"hpeNum\"] = msg.payload\n\nflow.set(\"sheet\", sheet)\n\n//return sheet\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 670,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "d79ea7e0.68edd8",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateError",
        "func": "var sheet = flow.get('sheet')||{}\n\nsheet[\"errorNum\"] = msg.payload\n\nflow.set(\"sheet\", sheet)\n\n//return sheet\n",
        "outputs": 1,
        "noerr": 0,
        "x": 670,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "893e0c4b.90d15",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "validateReic",
        "func": "var sheet = flow.get('sheet')||{}\n\nsheet[\"reicNum\"] = msg.payload\n\nflow.set(\"sheet\", sheet)\n\n//return sheet\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 670,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "26965c6d.2fd4a4",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "test",
        "func": "//var sheet = context.get(\"sheet\") || {\"payload\": \"faiou\"}\nvar sheet = flow.get('sheet')||0;\n//count += 1\nflow.set('sheet', sheet)\nreturn sheet//{\"payload\": sheet}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 470,
        "y": 500,
        "wires": [
            [
                "54293bea.0b9f54"
            ]
        ]
    },
    {
        "id": "2f801117.db694e",
        "type": "function",
        "z": "e08239b7.a99ba8",
        "name": "urlConcat",
        "func": "////https://docs.google.com/forms/d/e/1FAIpQLSfUa7auk26fvgrF1nDFVGZCCj-RYzCty2w4gmGE5om-M6tmjw/formResponse?usp=pp_url&entry.1544623310=Numero+da+tarefa&entry.603225237=Testador&entry.1353939701=Testada+dia&entry.1045003221=Iniciada+as&entry.650104975=Dura%C3%A7%C3%A3o+estimada&entry.1842236038=Numero+de+erros&entry.300946219=Numero+de+erros+no+caminho+feliz&entry.835313771=Numero+de+erros+reincidentes&entry.958237353={{topic}}\nlet sheet = flow.get('sheet')\nlet url = \"https://docs.google.com/forms/d/e/1FAIpQLSfUa7auk26fvgrF1nDFVGZCCj-RYzCty2w4gmGE5om-M6tmjw/formResponse?usp=pp_url\"\nurl += \"&entry.1544623310=\"     +sheet['taskNum']//numero da tarefa\nurl += \"&entry.603225237=\"      +sheet['taskTester']//Testador\nurl += \"&entry.1353939701=\"     +sheet['tasDate']//Testada dia\nurl += \"&entry.1045003221=\"     +sheet['taskStart']//Iniciada as\nurl += \"&entry.650104975=\"      +sheet['taskHunt']//Duração estimada\nurl += \"&entry.1842236038=\"     +sheet['errorNum']//Numero de erros\nurl += \"&entry.300946219=\"      +sheet['hpeNum']//Numero de erros no caminho+feliz\nurl += \"&entry.835313771=\"      +sheet['reicNum']//Numero de erros reincidentes\nurl += \"&entry.958237353=\"      +sheet['taskEnd']//Finalizada as\n\nreturn {\"url\": url, \"method\": \"GET\"};",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 540,
        "wires": [
            [
                "f9f17234.5a23b"
            ]
        ]
    }
]