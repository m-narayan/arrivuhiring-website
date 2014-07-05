 $(function() {
        $( document ).tooltip({
            position: {
                my: "center bottom-20",
                at: "center top",
                using: function( position, feedback ) {
                    $( this ).css( position );
                    $( "<div>" )
                            .addClass( "arrow" )
                            .addClass( feedback.vertical )
                            .addClass( feedback.horizontal )
                            .appendTo( this );

                }
            }
        });
        function setClickableTooltip(target, content){
            $( target ).tooltip({
                show: null, // show immediately
                position: { my: "center bottom", at: "center top" },
                content: content, //from params
                hide: { effect: "" }, //fadeOut
                close: function(event, ui){
                    ui.tooltip.hover(
                            function () {
                                $(this).stop(true).fadeTo(400, 1);

                            },
                            function () {
                                $(this).fadeOut("400", function(){
                                    $(this).remove();
                                })
                            }


                    );


                }


            });


        }
        setClickableTooltip('#t0', 'see <a style="color:#00accd" href="faq.html">FAQ</a>');
        setClickableTooltip('#t3', "The amount charged to your account for each candidate that takes a test created using your own Basic-Type Questions");
        setClickableTooltip(
                '#t4',
                'The amount charged to your account for each candidate that takes a<a style="color:#00accd" href="in-bulit-question.html"> Pre-Built Test</a> through your account'
        );
        setClickableTooltip('#t5',"Automatic Webcam Proctoring allows you to take exam-hall like controls in an online test. See a live video feed/static images of a candidate as they appear for a test.")
        setClickableTooltip('#t6',"Need someone to look over your candidates shoulder as they take a test? Use our remote-proctoring service in which trained proctors run a stringent check on the other side of the computer for the duration of the test")
        setClickableTooltip('#t8',"Critical test security features such as 'Power/Internet outage resume', 'Test Window lockdown to prevent web navigation', 'IP based restrictions' are made available for all tests without any additional cost")
        setClickableTooltip('#t9','Basic Question Types include <br>- Multiple Choice Questions (MCQ)</br>- Multiple Correct Answers (MCA)</br>- Fill in the blanks (FITB)</br>- Essay Type</br>- Match the Following (MTF)</br>- Group questions')
        setClickableTooltip('#t10',"Advanced Question Types include </br>- C, C++, Java, C#, HTML, CSS, JS, Python (single function)</br>- Java, C# (Multi class/ files)</br> - DB</br>- Spreadsheet</br>- Case study</br>Useful when you want to assess a candidate's hands-on programming, and other skills")
        setClickableTooltip('#t11',"Custom assessment reports to match your needs (competency mapping, certificate delivery for a test) ")
        setClickableTooltip('#t12',"Share access with more than a single user from your organization, assign different admin roles such as Question Creator, Test Administrator, Report Analyst")
        setClickableTooltip('#t13',"Create tests that include questions from your own as well as Mettl's Question Banks")
        setClickableTooltip('#t14',"Gamified experience for candidates to participate in contests such as Hackathons, campus events, employee events & more. Contest platform has essential features such as leaderboard, social sharing, landing pages for contest branding.  ")
        setClickableTooltip('#t15',"Conduct online certification exams on Mettl to certify applicants on vocational or professional qualifications. Has essential features like certification branding, payment gateway integration to collect payments from applicants, customizable certificates etc")
        setClickableTooltip('#t16',"Conduct online tests to prepare candidates for upcoming Tests/Certifications. This workflow has features such as dedicated candidate login, detailed reports & analytics, flexible test scheduling for different batches")
        setClickableTooltip('#t17',"Integrate Mettl's online assessments with your own application such as HRMS, LMS, Job portal using REST APIs.")
        setClickableTooltip('#t18', "Access to 700+ Question Banks and new ones being added daily. Thousands of questions across domains. For detailed pricing contact us.")
        setClickableTooltip('#t19', " You can create as many tests as you like in your account. Your account is charged only per candidate that appears for a test.")
        setClickableTooltip('#t20', " The cost of a test doesn't change with the number of questions in the test. Question type determines the cost, as mentioned below. ")
    });


