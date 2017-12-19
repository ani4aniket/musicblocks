var CUP_SAMPLE = "data:audio/wav;base64,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NQAvAAAAx/+l/8n/HwA/AA8A1f/F/8n/7f8dAC0AAQC3/73/5f8AABsAFwDl/6//zf8BABUACQD9/9//v//Z/wUADQAAAOv/1//P/9f/AQATAPP/4f/b/83/5//7/wMAAADb/8v/1//n//3/DwAAAOH/w//R//X/DQAJAPX/2f+5/9H/DQAVAAAA3f+7/8X/6/8hAC8A+f+1/7v/3/8BAC0AGwDV/53/tf8BACkAGQD5/8X/l//N/y0ANwABANf/u/+z//H/OwAtAOf/q/+9/+H/BwAxABkAwf+d/9H/BQAhAA8A8//H/6n/7f8lACEA8//T/8H/v/8AACkAEQDX/8P/z//j/wAAGQABAM3/yf/d/+v/AAD///H/y//F/+X/9f/1/+//6//X/8v/3f/3//v/6f/p/9X/w//d//n////h/9X/yf/D/9n/AQAFAOP/y/+//8v/6f8BAA0A4/+x/63/3////wkA///B/5//tf/x/xcAAADP/7H/s//Z/wsAGwDz/6v/k//B//v/EwAHANf/j/+b//H/GwAPAOn/r/+j/8f///8tAAMAtf+d/7n/3f8PABUA5f+n/5v/2/8NAA8A9//L/6X/s//z/xkAAADZ/7//u//b//f/DQD3/8X/vf/V//X/AAAAAOf/z//F/+P//f/5//P/6//X/9H/5/////n/7f/t/+H/1f/l//f/AADz/+n/5//R/93/AwAAAAAA7f/X/9n/7f8BABUA9f/R/8//5f8AABcACwDl/8X/y/8AAB8ADQAAANv/sf/Z/x0ANwAPAOH/xf/J//n/LQAzAPH/vf/H/+//FwAxABkA1f+7/9X/EQA5ACMA8//N/8P/+f85ADMABwDZ/8P/7f8bADUAKwD9/8n/3f8LACcAMQALAOH/1//t/yEAMwARAPn/5//n/wMAIwAdAAUA8f/z//3/EQAjABEACQD3//P/CwAVABMADwAAAPf///8AABEAEwAHABMA///v/wAAEwAbABEAAwDx/+3///8dACEABQDz/+f/7f8DACUAJwAAAOP/4f8AABsAJwAVAO3/0f/n/xsALQAhAP3/zf/F////KQA3AAkA1f/H/+P/EwA5ACUA7//H/9H/AAAvACsAAwDd/7f/6f8fAC0AFQDh/7n/1/8AACsAJwDx/8X/yf/x/xsAIwALAN3/x//Z/wEAIwAVAO//2f/P/+v/DwATAPv/3f/T/+v/AQAPAAsA7//d/+P/+f///wAAAADv/+X/7f/v/wEABQD5//H/6//v//3/AAADAPn/7//r/+X/6f8AABEAAADn/+H/4//x/wsAEQD7/+f/0//r/wsAFQAPAO//y//V/wAAHwAfAPP/1f/R/+f/EQA1ABUA4f/L/93/AAApACcA9//R/8v/+f8lAC0ADQDh/8X/3f8XADEAKQD9/8X/z/8AADEAMwANAN3/1f/v/xsAPQAfAOv/2//l/wkAKQArAAcA4f/T//v/JQAtAB0A+f/j/+n/DwArACEAAQDx//X/AAAXACUADwD9//n///8LABsAGwAJAAAA+f8BAAcAFQAVAAUAAAAAAAMACwARABkAFQAAAP////8HACEAIwAPAAAA9f8AABUAJwAfAA8A8//x/w0AJQA3ABcA9//t//3/HwA/ADMAAwDr/+//DwA3ADUAHQD1/9v/AAAtAD0AMQADAN3/5/8ZAEcAQQATAO3/3/8FADMARQAvAPv/6f/3/x0ASQA5ABUA8//t/wsAQQBJACMA///p/wAALwBJADsADQDx////HwAzAD0AIQAAAP3/CQAvAD8ALwALAAUACQAVADcAOQAbAAcABQAdACEAJQArACEABwAJACcAIwAbACkAIQAVABMAGQAlACcAHQAjABkACQAVAC0AKwAnAB8AEwAHAA0ALwA/ACcACQAJAAkAEQA9AEUAFQAAAAAAFwAxADcAMwALAOn/AAAtAD0ANQAXAP//7/8TAD0ATQAnAPf/8f8BACEAQQA5AAMA4//x/w8AMQA5ABkA+f/j//3/LQBBAB8A///j//P/GwAzADEAEwDt/+f/CQAfACUAHwD//+n/9f8VAC0AGwADAPX/8/8BACMAKwANAPv/9f/9/wcAFwAVAA8A9//7/wkACQAJAA8ABQAAAAUACQALAA8ACwAHAAAA9f///w8ABwAJAAsA9f/3/wAACQAZAAcA/f/9//H/AAAdABsAAQD3/+X/7f8PAB8AFQD5/9//7f8AABUAHwAHAOP/3f/z/w8AIQAXAPH/1f/v/wsALQAnAAAA4//Z//3/JwApAA8A9//X/+X/FQArACEAAADl/+n/AAAjACsACQDn/+H/9/8TACMAFQD5/+n/6/8LACEAHwAJAPH/6f/5/w8AIQATAPf/7//3/wUAFQAXAAMA8//x//v/BQAPAAcAAAD3//n//f8DAA0AAwD/////+f/5/wUABwADAAAA+f/3//3/AwANAAUA+f/v//P/AAARAA8AAAD5/+n/6/8JABsACwD9/+v/4f/9/xUAIQAJAOX/3//1/wcAHQAdAPf/4f/p//v/GQAbAAMA4//T/+n/DQAdAAkA7f/P/93/CQAdABUA/f/X/9H/8f8PACEACwDj/9P/3/8AABkAEwD1/9f/2f/v/wcAEQD//+P/2//l/wEAEQADAPf/3f/d//v/DwAHAPv/5f/j/+3/9/8NAAUA8f/r/+//8f///wUAAQDx/+f/8//5//X/AAADAPP/6//x//3/9//7/wMA+//n/+3//f8AAAMAAwD1/+P/6f8AABEAAQD5/+n/3f/x/wkAFwAHAOv/4//r////EQATAPn/1//X//X/DQAXAAkA6//X/+H/CwAnAA8A+f/b/9n/+f8RAB0ABQDd/9P/6/8HABkADwD3/9v/3f8AABkAFwAAAOH/3f/r/xEAJQAJAOn/3f/p/wAAGQATAAAA4//h//n/CwANAAkA+f/j/+n/AAANAAkA+//3/+//9/8JABMABwD1//X/+//9/wMACwAFAPf/9/8AAP3//f8FAAUA+//1//X/AQABAAUABwD7/+v/+f8AAAcACwADAPf/7f/x/wkAFQAJAPf/6//p//3/GQAdAAcA6//h//P/CQAdABMA+//l/+P/AAAdABUAAADv/+H/9f8ZACcADQDz/+P/6/8FACUAIwD7/+P/4//5/xcAIwATAOv/3//z/w8AHQAdAAAA3//l/wAAGQAZAAEA6//j//P/CwAZAA8A9//p//X/AQALABcAAADv/+n/+f8FAAsA///3/+3/6//9/wcABQAAAPf/9f/5//3/AAAFAP//9//1//H/9f8AAAEAAAD5/+3/8f/9/wAABQADAPf/6f/v/wAABQAHAPf/7f/l/+3/CQAVAAAA7//p/+n/AAAZABUA+//j/+X///8PABcACQDl/9H/7/8HABUAEwD5/9//3f/5/xkAHQD9/+3/3f/r/wsAIQAPAOv/2f/n/wAAEwAbAAAA3//b////FQATAAkA+f/h/+n/BQAbAA8A+f/r/+3/9/8LAB0ABQDv/+////8DAA0AEQABAO3/9/8LAAkACQALAAEA9f///w8ADwAFAAkAAwAAAAAACwAPAAkACQAJAP///f8JAA8ADwANAAMA//8AAAsAGQAVAAkAAAD//wUAEQAfABMAAwD7//n/EQAdACEADQD7//P/BwAfAC0AGwABAPv///8ZACcAKQANAPn/+f8FACMALQAdAAAA8////xkAMQAlAAkA9//7/w8AKQArABEA+//1/wEAHQArACMABwD1//3/EQApACUAFwAAAPn/BwAbACkAGQAAAPn/AAAPABsAHQALAP//AAALABMAFwAXAAkA//8AABEAFQARAA8AAwABAAcADwATAAsACQALAAEAAQAJABEADwANAAkABQAAAAAAEwAXAAUAAAABAP//CQAXABMAAwD7//v/CQAPABcAEwD//+3///8TABsAEwADAPn/7/8BABkAHwAHAPX/8f/7/xEAIQAXAAAA6//z/wkAGwAbAAsA8f/n//3/FwAhABEA+//v//P/BwAbAB0AAQDr/+//AwATABsADQD3/+//+/8PAB8AEwABAPP/8f8BABUAEwAJAPv/8f8AAAcADwAJAP//8//3/wAACwANAAEA+//5//v/AAAHAAMA/f/9//3/+/8AAAEAAQAAAP3/+//9//////8DAAAA+f/1//X//f8AAAAA/f/x/+v/+f8BAAEAAAD3/+v/6f/5/wUACQD3/+n/5f/v/wAAFQAAAOv/4//p//3/CQAJAPf/4f/b//P/BQAJAP//6f/Z/+X/AAARAAUA8f/d/9v/9/8LAA0A9f/h/9n/5/8AAA0AAQDp/93/4f/5/wkABwDx/93/3//x/wEABwD5/+X/4//l//3/BQAAAPP/4//n//f/AQABAPv/6//p//H/+//9//v/8//t/+//8f/5//n/9f/x/+3/8f/3//X/9//3//n/9f/z//H/7//7////+//x/+3/7//3////AAD3/+X/5//1//3/AAD7/+v/4//r//3/BwAAAPH/5f/h//P/BwAHAPv/6f/d/+3/AQALAAMA6//b/+f//f8JAA0A+//d/9//+f8LAA8AAwDp/9f/6/8AABEABwD1/93/4//1/wcADwD7/+f/4f/x/wEACwADAPX/4f/l//3/BQABAPf/5//n//X/AAAHAP//6//r/+///f8AAAEA+f/t/+3//f8AAP/////1//H/9f/5//3/+//3//f/9f/3//f//f/7//v/9//3/+//7//3/////f/1/+//7f/v//f/AwAAAO//7f/x//v/AwAFAPn/5f/d//H/AAAAAP//7//f/+P/+f8JAAEA7//j/+P/8/8FABEA///h/+H/8f8BAAsABwDx/9//5f8AAAkACQD7/+v/4//x/w0AEwAAAO3/5f/v/wAAEQANAPv/5f/p//3/AwAJAAAA7f/h//v/DQAHAAEA9f/v/+v//f8HAAMA/f/x/+v/9f8AAAEA/f/x//X/9//9/wAA/f////v/+f/7//v/AAD///v////7//n/+//////////9//3/9f/3/wAABQABAP3/9//3//v/CQANAAMA9//x////BQALAAsA/f/t//X/AwAPAA0AAwD5/+//+/8NABkABwD5/+//9/8FABMADwD9/+n/8/8BABUAFwAJAPv/6//5/w8AGQARAAAA8f/x/wEAFwAbAAEA8//1/wAADQAdABEA/f/x//3/DQATAA8AAQD5//f/BQAPABMABwAAAP3///8LABEADQAAAPv/AAAFAAsABQADAP////8AAAcABwAAAAEABQAAAP//AAABAAAAAwADAP///////wMAAwABAAMAAAD5////BQAJAAUA/f/5//v/AwANAA0A///1//n/AQANAA8ABwD5//X//f8LABMADwABAPP/9f8AABUAFQABAPX/8f///xEAGwANAP3/6//9/wcAFQAVAAEA8f/3/wUAEwAZAAsA+//z//v/DwATABEAAQD5//f/BQAVABEABwD5//f/AAAPABMACQD///n/+/8FAAkACwADAP///f8AAAkADQAFAAAA//8AAAkACQAHAAEAAAAAAAEAAwAHAAkABQAFAAUABQAFAAUACQANAAkAAwADAAUACwALAAcAAQAAAAAABQANABcADQAAAAAAAwAPABkADQABAP3///8FABMAEQADAPv/+/8DABEAGQARAAAA+f8AAA8AGQATAAMA9//3/wUAEwAVAAkA+//z/wAAEQAZABEAAQD1//3/CQAZABEABwD7//n/AAATABcABwAAAPv/AQALABUAEwADAPv/AAAHABEAEQAJAP//+f8AAAcADwANAAAA//8AAAUACQAJAAUAAAABAAMAAwAJAAcAAwAAAAEAAQABAAUABwAFAAAAAAABAAEABQAHAAcABQD//wEAAwAHAAcAAwD///v//f8HAA0ABwD///n/+f8BAAsADQABAPn/9f///wUADwALAP//8//3/wEADQANAAMA8//n/wAADwARAAkA9//z//n/AwAPAAsA/f/v//X///8NAA0AAwD3/+//+/8JABEABQD7/+3/8/8BAA0ACwD///X/+f///wcACQAHAP3/9////wMABwAJAAAA8//7/wMABwAFAAAAAAD/////BQALAAEAAAAAAAAAAAADAAcAAwAAAAAAAQAAAAAAAwAFAAEAAQAAAAAAAAABAA0ABQAAAP3//f///wUABwAAAP3/+f///wcACQADAP//+f/9/wAACwAJAAAA9//5/wEACQARAAUA+f/v////BQAPAAkA/f/z//X/AQARAA0AAAD3//f//f8NAA8ACQD7//H/9/8FAAkACwAAAPX/7f8BABEADQADAPv/9f/9/wcADwALAPv/9//7/wAACQANAAEA+//5/wAABwAJAAcAAAD7////AQAHAAUAAAAAAAAAAAABAAUAAQAAAAAAAQAFAAEABQAFAAAAAQADAAMAAQADAAcACQABAAAAAQADAAkACwALAAMAAQABAAsADQANAAMAAAAAAAMADwAPAAUA///9/wEACwAVAAsAAQD//wAADQAXABUACwD//wAACQATABcAEQABAAAAAwARABkAFwAHAAAAAQANAB0AHQAPAAUAAAAHABcAHQAZAAkAAQAHABcAHwAdABMABwAHAA8AGwAdABcACwAFAA0AEwAbABsADQALAAkAEQAZABcACwALAAkADQAXABUAEwANAAkADwARAA8AFQARAAsADwANAA8ADQANAA0ADwANAA0ADwA=";