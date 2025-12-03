
// (function(){
//     const checkbox = document.getElementById('extendtheland');
//     const radios   = document.querySelectorAll('input[type="radio"][name="card"]');
//     const output   = document.getElementById('extendResult');
//     const btn      = document.getElementById('quyetchien');

//     function getSelectedRadio() {
//         return document.querySelector('input[type="radio"][name="card"]:checked');
//     }

//     function getLabelTextForInput(input) {
//         if (!input) return '';
//         const id = input.id;
//         const label = document.querySelector(`label[for="${id}"]`);
//         return label ? label.textContent.trim() : '';
//     }

//     function renderLetters(text){
//         if(!output) return;
//         output.innerHTML = '';
//         for(const ch of text){
//             const span = document.createElement('span');
//             span.textContent = ch;
//             span.style.display = 'inline-block';
//             span.style.marginRight = '6px';
//             output.appendChild(span);
//         }
//     }

//     // Khi bấm nút "quyetchien"
//     if (btn) {
//         btn.addEventListener('click', () => {
//             // Bắt buộc phải bật checkbox
//             if (!checkbox.checked) {
//                 output.textContent = 'Hãy bật "Mở rộng bờ cõi" trước đã 😏';
//                 return;
//             }

//             // Bắt buộc phải chọn 1 radio
//             const sel = getSelectedRadio();
//             if (!sel) {
//                 output.textContent = 'Hãy chọn 1 thẻ hành động trước.';
//                 return;
//             }

//             const text = getLabelTextForInput(sel) || 'Đã mở rộng';
//             renderLetters(text);
//         });
//     }
// })();

const fullName = "Bro Code"

let firstName = fullName.slice(4,8);
wdsa
console.log(firstName);
