let str = `{"input":
                     {
                       "output1": {"name": "Divya"},
                       "output2": {"name": "Kondakrindi"}  
                     }
                    }`;
    
        let actual_object = JSON.parse(str); 
        console.log(actual_object);
        let actual_object_return = actual_object.input;
        console.log(actual_object_return);
        let new_obj = {};
        let final_obj = {};
        Object.keys(actual_object_return).forEach(function(key) {
            new_obj[key] = actual_object_return[key]["name"];
        });
        final_obj['input']=new_obj;
        console.log(final_obj.input.output1);
