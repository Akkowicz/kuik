class Kuik{static async get(t){const a=await fetch(t);return await a.json()}static async post(t,a){const e=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});return await e.json()}static async put(t,a){const e=await fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});return await e.json()}static async delete(t){await fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}});return"Resource Deleted."}}