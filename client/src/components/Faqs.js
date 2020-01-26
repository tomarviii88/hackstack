import React from 'react';

const Faqs = () => {
  return (
    <div className='faqs' id='fq'>
      <p>FAQ</p>
      <div className='faqs-box'>
        <ul>
          <li className='ques'>
            1. Is there a registeration fee for this Hackathon?
          </li>
          <ul>
            <li className='ans'>
              Nope. It will cost you nothing to register for HackStack.
            </li>
          </ul>
          <br />
          <br />
          <li className='ques'>2. What about food and rest?</li>
          <ul>
            <li className='ans'>
              We've got it covered. We'll ensure we keep your tummies happy.
              We'll also make necessary arrangements for you to rest during the
              Hackathon.
            </li>
          </ul>
          <br />
          <br />
          <li className='ques'>3. Is there any travel reimbursement?</li>
          <ul>
            <li className='ans'>
              Unfortunately, this being our first version of the Hackathon,
              we're unable to provide travel reimbursement. However, stay
              updated with our Facebook and LinkedIn pages, and you might hear a
              good news.
            </li>
          </ul>
          <br />
          <br />
          <li className='ques'>4. What should I bring to the Hackathon?</li>
          <ul>
            <li className='ans'>
              A valid government issued photo ID, your college ID, laptop,
              phone, chargers, spike guards, any stationery required, any
              sleeping equipment you might want (we'll be providing mattresses)
              and loads of brainstorming cells!
            </li>
          </ul>
          <br />
          <br />
          <li className='ques'>5. What should I not bring?</li>
          <ul>
            <li className='ans'>
              Weapons of any kind, drugs, cigarettes, lighters, matchsticks or
              alcohol. If you’re not sure whether something will be okay, please
              ask ahead of time! You might be denied entry to the campus if
              anything is not according to the institution rules.
            </li>
          </ul>
          <br />
          <br />
          <li className='ques'>
            6. How do teams get shortlisted for the on-site round?
          </li>
          <ul>
            <li className='ans'>
              When you register on devfolio, we will ask you to submit an idea.
              Based on this idea and your profile(Github, LinkedIn and Resume),
              shortlisting of teams will be done.
            </li>
          </ul>
          <br />
          <br />
          <li className='ques'>7. What should the team size be?</li>
          <ul>
            <li className='ans'>A team can consist of 2-3 members.</li>
          </ul>
          <br />
          <br />
          <li className='ques'>8. Can we build anything we wish to?</li>
          <ul>
            <li className='ans'>
              We will be releasing a wide set of themes a few days before the
              Hackathon, and you will have to build a hack based on those
              themes. That being said, we will NOT be restricting you to
              specific problem statements, you are free to implement anything
              you wish to solve a broader problem.
            </li>
          </ul>
          <br />
          <br />
          <li className='ques'>9. Who can attend this Hackathon?</li>
          <ul>
            <li className='ans'>
              Anyone with a knack for programming is more than welcome to apply.
            </li>
          </ul>
          <br />
          <br />
          <li className='ques'>
            10. What will I get from attending this Hackathon?
          </li>
          <ul>
            <li className='ans'>
              Exciting Prizes, networking with fellow hackers and industry
              experts, and really awesome goodies and swag you can brag about.
            </li>
          </ul>
          <br />
          <br />
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
