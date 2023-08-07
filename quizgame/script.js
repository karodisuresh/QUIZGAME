const quesJSON = [
    {
      correctAnswer: 'JDB',
      options: [
        'JVM',
        'JRE',
        'JDK',
        'JDB',],
      question:
        "_____ is used to find and fix bugs in the Java programs ?"

        
    },
    {
      correctAnswer: 'Bytecode is executed by JVM',
      options: [
       'Bytecode is executed by JVM',
        'The applet makes the Java code secure and portable',
        'Use of exception handling',
        'Dynamic binding between objects',
      ],
      question:
        "Which of the following option leads to the portability and security of Java ?"

    },
    {
      correctAnswer: 'Use of pointers',
      options: [
        'Dynamic',
        'Architecture Neutral',
        'Use of pointers',
        'Object-oriented',
      ],
      question:
        'Which of the following is not a Java features ?'
    },
    {
      correctAnswer: 'int',
      options: [
        'Object',
      'int',
      'long',
      'void',
      ],
      question: 'What is the return type of the hashCode() method in the Object class?'

    },
    {
      correctAnswer: 'import',
      options: [
        ' package',
        'import',
        'extends',
        'export',
      ],
      question:
        " Which keyword is used for accessing the features of a package? "

    },
  ];
     
      let score=0;
      let currentQuestion = 0;
      const totalscore = quesJSON.length;
  
      //Accessing all the elements:
      const questionEl = document.getElementById("question");
      const optionEl = document.getElementById("options");
      const scoreEl = document.getElementById("score");
      const nextEl = document.getElementById("next");
       
      showQuestion();

      nextEl.addEventListener("click", () => {
        scoreEl.textContent = `Score: ${score} / ${totalscore}`;
        nextQuestion();
      });
      function showQuestion(){
         // Destructuring the object
       const{correctAnswer, options, question} = quesJSON[currentQuestion];
  
        //Setting question text content
      questionEl.textContent = question; 
      
      const shuffledOptions = shuffleOptions(options);
      
          //Populating the Options div with the buttons.
          shuffledOptions.forEach((opt) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            optionEl.appendChild(btn);
    
        // Event handling on the button:
        btn.addEventListener("click", () => {
            if(opt === correctAnswer){
                score++;
            }
            else{
                score=score-0.25;
            }
        console.log(score);
        scoreEl.textContent = `Score: ${score} / ${totalscore}`;
       nextQuestion();
        // questionEl.textContent = 'Quiz Completed!!';
        // optionEl.textContent = '';
            });
        });
    }
  
     function nextQuestion(){
        currentQuestion++;
        optionEl.textContent = '';
        if(currentQuestion>=quesJSON.length){
            questionEl.textContent = 'Quiz Completed!!';
         nextEl.remove();
        
        }else{
            showQuestion();
        }
     }

  //Shuffling the Options
  function shuffleOptions(options) {
      for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] = [
          options[j],
          options[i],
        ];
      }
      return options;
    }
    
  //   shuffleOptions([1, 2, 3, 4, 5]);