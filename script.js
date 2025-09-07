let display = document.getElementById('display');
      let currentInput = '0';
      let shouldResetDisplay = false;

      function updateDisplay() {
        display.textContent = currentInput;
      }

      function clearDisplay() {
        currentInput = '0';
        shouldResetDisplay = false;
        updateDisplay();
      }

      function appendToDisplay(value) {
        // If we should reset the display (after equals was pressed)
        if (shouldResetDisplay && !isOperator(value)) {
          currentInput = '0';
          shouldResetDisplay = false;
        }
        // Handle initial zero
        if (currentInput === '0' && value !== '.') {
          if (isOperator(value)) {
            currentInput += value;
          } else {
            currentInput = value;
          }
        }
        // Prevent multiple decimals in the same number
        else if (value === '.') {
          let parts = currentInput.split(/[\+\-\*\/]/);
          let lastPart = parts[parts.length - 1];
          if (!lastPart.includes('.')) {
            currentInput += value;
          }
        }
        // Prevent consecutive operators
        else if (isOperator(value) && isOperator(currentInput[currentInput.length - 1])) {
          currentInput = currentInput.slice(0, -1) + value;
        }
        // Normal append
        else {
          currentInput += value;
        }
        updateDisplay();
      }

      function isOperator(char) {
        return ['+', '-', '*', '/'].includes(char);
      }

      function deleteLast() {
        if (currentInput.length > 1) {
          currentInput = currentInput.slice(0, -1);
        } else {
          currentInput = '0';
        }
        updateDisplay();
      }

      function calculate() {
        try {
          // Remove trailing operator if exists
          if (isOperator(currentInput[currentInput.length - 1])) {
            currentInput = currentInput.slice(0, -1);
          }
          // Evaluate the expression
          let result = eval(currentInput);
          // Handle division by zero
          if (!isFinite(result)) {
            currentInput = 'Error';
          } else {
            // Round to avoid floating point issues
            result = Math.round(result * 100000000) / 100000000;
            currentInput = result.toString();
          }
          shouldResetDisplay = true;
        } catch (error) {
          currentInput = 'Error';
          shouldResetDisplay = true;
        }
        updateDisplay();
      }
      // Keyboard support
      document.addEventListener('keydown', function(event) {
        if (event.key >= '0' && event.key <= '9') {
          appendToDisplay(event.key);
        } else if (event.key === '.') {
          appendToDisplay('.');
        } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
          appendToDisplay(event.key);
        } else if (event.key === 'Enter' || event.key === '=') {
          calculate();
        } else if (event.key === 'Escape' || event.key === 'c' || event.key === 'C') {
          clearDisplay();
        } else if (event.key === 'Backspace') {
          deleteLast();
        }
      });
    </script>
    <!-- Code injected by live-server -->
    <script>
      // 
      < ![CDATA[ < --For SVG support
          if ('WebSocket' in window) {
            (function() {
              function refreshCSS() {
                var sheets = [].slice.call(document.getElementsByTagName("link"));
                var head = document.getElementsByTagName("head")[0];
                for (var i = 0; i < sheets.length; ++i) {
                  var elem = sheets[i];
                  var parent = elem.parentElement || head;
                  parent.removeChild(elem);
                  var rel = elem.rel;
                  if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                  }
                  parent.appendChild(elem);
                }
              }
              var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
              var address = protocol + window.location.host + window.location.pathname + '/ws';
              var socket = new WebSocket(address);
              socket.onmessage = function(msg) {
                if (msg.data == 'reload') window.location.reload();
                else if (msg.data == 'refreshcss') refreshCSS();
              };
              if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
                console.log('Live reload enabled.');
                sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
              }
            })();
          } else {
            console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
          }
          // ]]>
