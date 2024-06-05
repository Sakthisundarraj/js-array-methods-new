var ar = []

        function push() {
            var item = document.getElementById("input").value

            if( item == '')
                {
                    alert("Enter a Value to do Function")
                }
                else{
                    ar.push(item)
                    document.getElementById("result").textContent = "[" + ar + "]"
                    document.getElementById("input").value = ""
                }
        }

        function pop() {
            ar.pop()
            document.getElementById("result").textContent = "[" + ar + "]"
        }
        
        function del() {
            var deleteindex = parseInt(prompt("enter a Index value to delete elements"))
            delete ar[deleteindex]
            document.getElementById("result").textContent = "[" + ar + "]"
        }
        
        function con() {
            var text1 = []
            var text2 = prompt("Enter a value to function concat")
            text1 = ar.concat(text2)
            document.getElementById("result").textContent = "[" + text1 + "]"
            ar = text1
        }
        
        function fil() {

            var filtext = parseInt(prompt("enter a value to filter"))

            function check(age) {

            var temp

                if (filtext == age) {
                    return temp = filtext
                }
            }

            document.getElementById("result").textContent = ar.filter(check)
        
        }
        
        function fin() {
        
            var finvalue = parseInt(prompt("Enter a value to find"))
        
            function check(age) {
                return age < finvalue
            }

            var fina = ar.find(check)
            document.getElementById("result").textContent = fina
        
        }
        
        function shift() {
            ar.shift()
            document.getElementById("result").textContent = "[" + ar + "]"
        }
        
        function unshift() {
            var inputelem = prompt("Enter a value to add")
            ar.unshift(inputelem)
            document.getElementById("result").textContent = "[" + ar + "]"
        }
        
        function reverse() {
            ar.reverse()
            document.getElementById("result").textContent = "[" + ar + "]"
        }
        
        function sort() {
            ar.sort()
            document.getElementById("result").textContent = "[" + ar + "]"
        
        }
        
        function slice() {
            var a = parseInt(prompt("Enter a index value to slice"))
            var b = parseInt(prompt("Enter a value to do ADD or Remove or Replace action"))
            ar = ar.slice(a, b)
            document.getElementById("result").textContent = "[" + ar.slice(a, b) + "]"
        
        }
        
        function sp() {
            var inv = parseInt(prompt("Enter a index value to splice"))
            var adre = parseInt(prompt("Enter a value to do ADD or Remove or Replace action"))
            // var item = document.getElementById("input").value
            ar.splice(inv, adre)
            document.getElementById("result").textContent = "[" + ar + "]"
        }
        

