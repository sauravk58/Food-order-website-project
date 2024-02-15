var order
        const menu={
            "Nburger":60,
            "Cburger":70,
            "pizza":300,
            "Cpizza":350,
            "pasta":80,
            "noodles":80,
            "dabeli":40,
            "masala dosa":90,
            "Aloo tikki":40,
            "samosa":30,
            "momos":30,
            "chole kulche":60,
            "paneer tikka":120,
            "chicken burger":90,
            "chicken fry pack":200
        }
        function check(){
            //alert("Hello")
            order=document.getElementById("order").value
            if(order!=="None"){
                //alert("Hello")
                document.getElementById("quantity").disabled=false
            }
        }

        function update(){
            document.getElementById("cost").value="Rs. "+menu[order]*parseInt((document.getElementById("quantity").value))
        }