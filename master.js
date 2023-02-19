
let boxList = document.querySelectorAll('.box')
let counter = 1



boxList.forEach((item, index) => {
    switch (index) {
        case 27:
            item.querySelector('.mohre').setAttribute("status", "white")

            break;
        case 28:
            item.querySelector('.mohre').setAttribute("status", "black")

            break;
        case 35:
            item.querySelector('.mohre').setAttribute("status", "black")

            break;
        case 36:
            item.querySelector('.mohre').setAttribute("status", "white")

            break;


        default:
            break;
    }
})

// *********************************** for style and click ****************************

boxList.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        console.log('index : ', index)
        let color1 = ''
        let color2 = ''
        console.log(boxList[index].querySelector('.mohre').getAttribute('status'))

        if (item.querySelector('.mohre').getAttribute("statusBorder") == 'full') {

            if (item.querySelector('.mohre').getAttribute('status') == null) {
                // console.log(item.querySelector('.mohre').getAttribute('status'))
                if (counter % 2) {
                    color1 = 'black'
                    color2 = 'white'
                    // console.log(color1,color2)
                } else {
                    color1 = 'white'
                    color2 = 'black'
                    // console.log(color1,color2)
                }
                item.querySelector('.mohre').style.background = color1
                item.querySelector('.mohre').setAttribute("status", color1)
                // console.log(Math.floor(2))

                //*************************************** start for got to left
                for (let i = 1; i <= (index % 8); i++) {
                    let num = index - i
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == null) {
                        break;
                    }

                    if (boxList[num].querySelector('.mohre').getAttribute('status') == color1) {
                        for (let k = num; k < num + (index - num); k++) {
                            boxList[k].querySelector('.mohre').style.background = color1
                            boxList[k].querySelector('.mohre').setAttribute("status", color1)
                        }
                        break;
                    }
                }
                //***************************************end  for got to left



                //***************************************start  for got to rigth

                for (let i = 1; i <= (7 - (index % 8)); i++) {
                    let num = index + i
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == null) {
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == color1) {
                        for (let k = index; k < index + (num - index); k++) {
                            boxList[k].querySelector('.mohre').style.background = color1
                            boxList[k].querySelector('.mohre').setAttribute("status", color1)
                        }
                        break;
                    }
                }
                //***************************************end  for got to rigth



                //***************************************start  for got to top
                for (let i = 1; i <= (Math.floor(index / 8)); i++) {
                    let num = index - (i * 8)
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == null) {
                        break;
                    }

                    if (boxList[num].querySelector('.mohre').getAttribute('status') == color1) {
                        for (let k = num; k <= index ; k+=8) {

                            boxList[k].querySelector('.mohre').style.background = color1
                            boxList[k].querySelector('.mohre').setAttribute("status", color1)
                        }
                        break;
                    }
                }

                //***************************************end  for got to top

                //***************************************start  for got to top-left
                for (let i = 1; i < 8; i++) {
                    let num = index - (i * 9)
                    if ((index % 8 == 0) || (num % 8 == 0) || num < 8 || index < 8) {
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == null) {
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == color1) {
                        for (let k = num; k < index; k += 9) {
                            boxList[k].querySelector('.mohre').style.background = color1
                            boxList[k].querySelector('.mohre').setAttribute("status", color1)
                        }
                        break;
                    }
                }

                //***************************************end  for got to top-left
                //***************************************start  for got to top-rigth
                for (let i = 1; i < 8; i++) {
                    let num = index - (i * 7)
                    if ((index % 8 == 7) || (num % 8 == 7) || num < 8 || index < 8) {
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == null) {
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == color1) {
                        for (let k = num; k < index; k += 7) {
                            boxList[k].querySelector('.mohre').style.background = color1
                            boxList[k].querySelector('.mohre').setAttribute("status", color1)
                        }
                        break;
                    }
                }

                //***************************************end  for got to top-rigth


                //***************************************start  for got to bottom
                for (let i = 1; i <= (7- (Math.floor(index / 8))); i++) {
                    let num = index + (i * 8)
                    
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == null) {
                        
                        break;
                    }

                    if (boxList[num].querySelector('.mohre').getAttribute('status') == color1) {
                        for (let k = num; k >= index; k-=8) {

                            boxList[k].querySelector('.mohre').style.background = color1
                            boxList[k].querySelector('.mohre').setAttribute("status", color1)
                        }
                        break;
                    }
                }
                //***************************************end  for got to bottom

                //***************************************start  for got to bottom-rigth
                for (let i = 1; i < 8; i++) {
                    let num = index + (i * 9)
                    if ((index % 8 == 7) || (num % 8 == 7) || num >= 56 || index >= 56) {
                        console.log('enter1')
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == null) {
                        console.log('enter2')
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == color1) {
                        console.log('enter3')
                        console.log(num)

                        for (let k = index; k < num; k+= 9) {
                            console.log('enter4',k)

                            boxList[k].querySelector('.mohre').style.background = color1
                            boxList[k].querySelector('.mohre').setAttribute("status", color1)
                        }
                        break;
                    }
                }

                //***************************************end  for got to bottom-rigth

                //***************************************start  for got to bottom-left
                for (let i = 1; i < 8; i++) {
                    let num = index + (i * 7)
                    if ((index % 8 == 0) || (num % 8 == 0) || num >= 56 || index >= 56) {
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == null) {
                        break;
                    }
                    if (boxList[num].querySelector('.mohre').getAttribute('status') == color1) {
                        for (let k = index; k < num; k+= 7) {
                            boxList[k].querySelector('.mohre').style.background = color1
                            boxList[k].querySelector('.mohre').setAttribute("status", color1)
                        }
                        break;
                    }
                }

                //***************************************end  for got to bottom-left





                counter++
            }
            clearBorder();
            promition();
        }
    })
})

// ********************************************defult set



promition();
// ************************ for promistion click **************************
function promition() {
    boxList.forEach((item, index) => {
        let color1 = ''
        let color2 = ''
        // if(item.querySelector('.mohre').getAttribute('status')==null){
        //     console.log(item.querySelector('.mohre').getAttribute('status'))
        // console.log(counter)
        if (counter % 2) {
            color1 = 'black'
            color2 = 'white'
            // console.log(color1,color2)


        } else {
            color1 = 'white'
            color2 = 'black'
            // console.log(color1,color2)

        }

        if (item.querySelector('.mohre').getAttribute('status') == color1) {

            //******************************** start */ for got to left
            let num_left = index - 1
            if(num_left>=0 || num_left % 8 !=0){
            if (boxList[num_left].querySelector('.mohre').getAttribute('status') == color2) {
                // console.log(true)
                // console.log((num_left % 8))
                for (let k = 1; k <= (num_left % 8); k++) {
                    if (boxList[num_left - k].querySelector('.mohre').getAttribute('status') == color1) {
                        break;
                    } else if (boxList[num_left - k].querySelector('.mohre').getAttribute('status') == null) {
                        boxList[num_left - k].querySelector('.mohre').style.border = '1px solid black'
                        boxList[num_left - k].querySelector('.mohre').setAttribute("statusBorder", "full")
                        break;
                    }
                }
            }
        }
            //******************************** end */ for got to left


            //*********************************** start */ for go to rigth
            let num_rigth = index + 1
            if(num_rigth<=63 || num_rigth % 8 != 7){
            if (boxList[num_rigth].querySelector('.mohre').getAttribute('status') == color2) {
                for (let k = 1; k <= (7 - (num_rigth % 8)); k++) {
                    if (boxList[num_rigth + k].querySelector('.mohre').getAttribute('status') == color1) {
                        break;
                    } else if (boxList[num_rigth + k].querySelector('.mohre').getAttribute('status') == null) {
                        boxList[num_rigth + k].querySelector('.mohre').style.border = '1px solid black'
                        boxList[num_rigth + k].querySelector('.mohre').setAttribute("statusBorder", "full")
                        break;
                    }

                }
            }
        }
            //*********************************** end */ for go to rigth


            //***************************************** satrt */ for go to top
            let num_top = index - 8
            if(num_top>=0){
            if (boxList[num_top].querySelector('.mohre').getAttribute('status') == color2) {
                for (let k = 8; (num_top - k) >= 0; k += 8) {
                    if (boxList[num_top - k].querySelector('.mohre').getAttribute('status') == color1) {
                        break;
                    } else if (boxList[num_top - k].querySelector('.mohre').getAttribute('status') == null) {
                        boxList[num_top - k].querySelector('.mohre').style.border = '1px solid black'
                        boxList[num_top - k].querySelector('.mohre').setAttribute("statusBorder", "full")
                        break;
                    }

                }
            }
        }

            //***************************************** end */ for go to top


            //***************************************** satrt */ for go to top left
            let num_top_left = index - 9
            if(num_top_left>=0 || num_top_left % 8 != 0){
            if (boxList[num_top_left].querySelector('.mohre').getAttribute('status') == color2) {
                for (let k = 1; k <= 8; k++) {
                    if (num_top_left % 8 == 0 || (num_top_left - (9 * k)) % 8 == 0 || (num_top_left - (9 * k)) < 8 || index < 8) {
                        break;
                    }
                    if (boxList[num_top_left - (k * 9)].querySelector('.mohre').getAttribute('status') == color1) {
                        break;
                    } else if (boxList[num_top_left - (k * 9)].querySelector('.mohre').getAttribute('status') == null) {
                        boxList[num_top_left - (k * 9)].querySelector('.mohre').style.border = '1px solid black'
                        boxList[num_top_left - (k * 9)].querySelector('.mohre').setAttribute("statusBorder", "full")
                        break;
                    }
                }
            }
        }

            //***************************************** end */ for go to top left


            //***************************************** satrt */ for go to top rigth
            let num_top_rigth = index - 7
            if(num_top_rigth>=0 || num_top_rigth % 8 !=7){

            if (boxList[num_top_rigth].querySelector('.mohre').getAttribute('status') == color2) {
                for (let k = 1; k <= 8; k++) {
                    if (num_top_rigth % 8 == 0 || (num_top_rigth - (7 * k)) % 8 == 0 || (num_top_rigth - (7 * k)) < 8 || index < 8) {
                        break;
                    }
                    if (boxList[num_top_rigth - (k * 7)].querySelector('.mohre').getAttribute('status') == color1) {
                        break;
                    } else if (boxList[num_top_rigth - (k * 7)].querySelector('.mohre').getAttribute('status') == null) {
                        boxList[num_top_rigth - (k * 7)].querySelector('.mohre').style.border = '1px solid black'
                        boxList[num_top_rigth - (k * 7)].querySelector('.mohre').setAttribute("statusBorder", "full")
                        break;
                    }
                }
            }
        }

            //***************************************** end */ for go to top rigth



            //******************************start */ for go to bottom
            let num_bottom = index + 8
            if(num_bottom<=63){

            if (boxList[num_bottom].querySelector('.mohre').getAttribute('status') == color2) {
                for (let k = 8; (num_bottom + k) <= 64; k += 8) {
                    if (boxList[num_bottom + k].querySelector('.mohre').getAttribute('status') == color1) {
                        break;
                    } else if (boxList[num_bottom + k].querySelector('.mohre').getAttribute('status') == null) {
                        boxList[num_bottom + k].querySelector('.mohre').style.border = '1px solid black'
                        boxList[num_bottom + k].querySelector('.mohre').setAttribute("statusBorder", "full")
                        break;
                    }

                }
            }
        }
            //   ******************************start */ for go to bottom


            //   ******************************start */ for go to bottom left

            let num_bottom_left = index + 7
            if(num_bottom_left<=63|| num_bottom_left % 8 != 0){

            if (boxList[num_bottom_left].querySelector('.mohre').getAttribute('status') == color2) {
                for (let k = 1; k <= 8; k++) {
                    if (num_bottom_left % 8 == 0 || (num_bottom_left + (7 * k)) % 8 == 0 || (num_bottom_left + (7 * k)) >= 64 || index >= 64) {
                        break;
                    }
                    if (boxList[num_bottom_left + (k * 7)].querySelector('.mohre').getAttribute('status') == color1) {
                        // console.log('armin 2')

                        break;
                    } else if (boxList[num_bottom_left + (k * 7)].querySelector('.mohre').getAttribute('status') == null) {
                        // console.log('armin 3')

                        boxList[num_bottom_left + (k * 7)].querySelector('.mohre').style.border = '1px solid black'
                        boxList[num_bottom_left + (k * 7)].querySelector('.mohre').setAttribute("statusBorder", "full")
                        break;
                    }
                }
            }
        }

            //   ******************************end */ for go to bottom left

            //   ******************************start */ for go to bottom rigth

            let num_bottom_rigth = index + 9
            if(num_bottom_rigth<=63 || num_bottom_rigth % 8 !=7){
                if (boxList[num_bottom_rigth].querySelector('.mohre').getAttribute('status') == color2) {
                    console.log('armin',num_bottom_left)

    for (let k = 1; k <= 8; k++) {
        if (num_bottom_rigth % 8 == 8 || (num_bottom_rigth + (9 * k)) % 8 == 8 || (num_bottom_rigth + (9 * k)) >= 64 || index >= 64) {
            console.log('armin 1',num_bottom_rigth % 8,(num_bottom_rigth + (9 * k)) % 8,(num_bottom_rigth + (9 * k)),index )
            break;
        }
        if (boxList[num_bottom_rigth + (k * 9)].querySelector('.mohre').getAttribute('status') == color1) {
            break;
        } else if (boxList[num_bottom_rigth + (k * 9)].querySelector('.mohre').getAttribute('status') == null) {
            boxList[num_bottom_rigth + (k * 9)].querySelector('.mohre').style.border = '1px solid black'
            boxList[num_bottom_rigth + (k * 9)].querySelector('.mohre').setAttribute("statusBorder", "full")
            break;
        }


    }
}
            }

            //   ******************************end */ for go to bottom rigth

        }

    })
}

function clearBorder() {
    boxList.forEach(item => {
        item.querySelector('.mohre').style.border = 'none'
        item.querySelector('.mohre').setAttribute("statusBorder", "null")

    })
}

