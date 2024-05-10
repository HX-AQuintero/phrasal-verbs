import { useState } from 'react';
import Card from './components/Card';
import Content from './components/Content';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: 'add up to something',
      meaning: 'equal',
      content: 'Your purchases add up to $24.',
    },
    {
      title: 'ask around',
      meaning: 'ask many people the same question',
      content: 'I asked around but nobody has seen my wallet.',
    },
    {
      title: 'ask somebody out',
      meaning: 'invite on a date',
      content: 'Brian asked Judy out to dinner.',
    },
    {
      title: 'back something up',
      meaning: 'reverse',
      content: "You'll have to back up your car so that I can get out.",
    },
    {
      title: 'back somebody up',
      meaning: 'support',
      content: 'My wife backed me up over my decision to quit my job.',
    },
    {
      title: 'blow up',
      meaning: 'explode',
      content: 'The racing car blew up after it crashed into the fence.',
    },
    {
      title: 'blow something up',
      meaning: 'add air',
      content: 'We have to blow 50 balloons up for the party.',
    },
    {
      title: 'break down',
      meaning: 'stop functioning (vehicle, machine)',
      content:
        'Our car broke down at the side of the highway in the snowstorm.',
    },
    {
      title: 'break down',
      meaning: 'get upset',
      content:
        'The woman broke down when the police told her that her son had died.',
    },
    {
      title: 'break something down',
      meaning: 'divide into smaller parts',
      content:
        'Our teacher broke the final project down into three separate parts.',
    },
    {
      title: 'break in',
      meaning: 'force entry to a building',
      content: 'Somebody broke in last night and stole our stereo.',
    },
    {
      title: 'break into something',
      meaning: 'enter forcibly',
      content: 'The firemen had to break into the room to rescue the children.',
    },
    {
      title: 'break something in',
      meaning: "wear something a few times so that it doesn't look/feel new",
      content: 'I need to break these shoes in before we run next week.',
    },
    {
      title: 'break in',
      meaning: 'interrupt',
      content:
        "The TV station broke in to report the news of the president's death.",
    },
    {
      title: 'break up',
      meaning: 'end a relationship',
      content: 'My boyfriend and I broke up before I moved to America.',
    },
    {
      title: 'break up',
      meaning: 'start laughing (informal)',
      content: 'The kids just broke up as soon as the clown started talking.',
    },
    {
      title: 'break out',
      meaning: 'escape',
      content:
        "The prisoners broke out of jail when the guards weren't looking.",
    },
    {
      title: 'break out in something',
      meaning: 'develop a skin condition',
      content: 'I broke out in a rash after our camping trip.',
    },
    {
      title: 'bring somebody down',
      meaning: 'make unhappy',
      content: 'This sad music is bringing me down.',
    },
    {
      title: 'bring somebody up',
      meaning: 'raise a child',
      content: 'My grandparents brought me up after my parents died.',
    },
    {
      title: 'bring something up',
      meaning: 'start talking about a subject',
      content:
        'My mother walks out of the room when my father brings up sports.',
    },
    {
      title: 'bring something up',
      meaning: 'vomit',
      content: 'He drank so much that he brought his dinner up in the toilet.',
    },
    {
      title: 'call around',
      meaning: 'phone many different places/people',
      content:
        "We called around but we weren't able to find the car part we needed.",
    },
    {
      title: 'call somebody back',
      meaning: 'return a phone call',
      content:
        'I called the company back but the offices were closed for the weekend.',
    },
    {
      title: 'call something off',
      meaning: 'cancel',
      content:
        "Jason called the wedding off because he wasn't in love with his fiancé.",
    },
    {
      title: 'call on somebody',
      meaning: 'ask for an answer or opinion',
      content: 'The professor called on me for question 1.',
    },
    {
      title: 'call on somebody',
      meaning: 'visit somebody',
      content: "We called on you last night but you weren't home.",
    },
    {
      title: 'call somebody up',
      meaning: 'phone',
      content:
        'Give me your phone number and I will call you up when we are in town.',
    },
    {
      title: 'calm down',
      meaning: 'relax after being angry',
      content:
        'You are still mad. You need to calm down before you drive the car.',
    },
    {
      title: 'not care for somebody / something',
      meaning: 'not like (formal)',
      content: "I don't care for his behaviour.",
    },
    {
      title: 'catch up',
      meaning: 'get to the same point as somebody else',
      content:
        "You'll have to run faster than that if you want to catch up with Marty.",
    },
    {
      title: 'check in',
      meaning: 'arrive and register at a hotel or airport',
      content: 'We will get the hotel keys when we check in.',
    },
    {
      title: 'check out',
      meaning: 'leave a hotel',
      content: 'You have to check out of the hotel before 11:00 AM.',
    },
    {
      title: 'check somebody / something out',
      meaning: 'look at carefully, investigate',
      content: 'The company checks out all new employees.',
    },
    {
      title: 'check out somebody / something',
      meaning: 'look at (informal)',
      content: 'Check out the crazy hair on that guy!',
    },
    {
      title: 'cheer up',
      meaning: 'become happier',
      content: 'She cheered up when she heard the good news.',
    },
    {
      title: 'cheer somebody up',
      meaning: 'make happier',
      content: 'I brought you some flowers to cheer you up.',
    },
    {
      title: 'chip in',
      meaning: 'help',
      content: 'If everyone chips in we can get the kitchen painted by noon.',
    },
    {
      title: 'clean something up',
      meaning: 'tidy, clean',
      content: 'Please clean up your bedroom before you go outside.',
    },
    {
      title: 'come across something',
      meaning: 'find unexpectedly',
      content: 'I came across these old photos when I was tidying the closet.',
    },
    {
      title: 'come apart',
      meaning: 'separate',
      content: 'The top and bottom come apart if you pull hard enough.',
    },
    {
      title: 'come down with something',
      meaning: 'become sick',
      content: 'My nephew came down with chicken pox this weekend.',
    },
    {
      title: 'come forward',
      meaning: 'volunteer for a task or to give evidence',
      content: "The woman came forward with her husband's finger prints.",
    },
    {
      title: 'come from some place',
      meaning: 'originate in',
      content: 'The art of origami comes from Asia.',
    },
    {
      title: 'count on somebody / something',
      meaning: 'rely on',
      content: 'I am counting on you to make dinner while I am out.',
    },
    {
      title: 'cross something out',
      meaning: 'draw a line through',
      content: 'Please cross out your old address and write your new one.',
    },
    {
      title: 'cut back on something',
      meaning: 'consume less',
      content: 'My doctor wants me to cut back on sweets and fatty foods.',
    },
    {
      title: 'cut something down',
      meaning: 'make something fall to the ground',
      content: 'We had to cut the old tree in our yard down after the storm.',
    },
    {
      title: 'cut in',
      meaning: 'interrupt',
      content: 'Your father cut in while I was dancing with your uncle.',
    },
    {
      title: 'cut in',
      meaning: 'pull in too closely in front of another vehicle',
      content: 'The bus driver got angry when that car cut in.',
    },
    {
      title: 'cut in',
      meaning: 'start operating (of an engine or electrical device)',
      content: 'The air conditioner cuts in when the temperature gets to 22°C.',
    },
    {
      title: 'cut something off',
      meaning: 'remove with something sharp',
      content: 'The doctors cut off his leg because it was severely injured.',
    },
    {
      title: 'cut something off',
      meaning: 'stop providing',
      content:
        "The phone company cut off our phone because we didn't pay the bill.",
    },
    {
      title: 'cut somebody off',
      meaning: 'take out of a will',
      content: 'My grandparents cut my father off when he remarried.',
    },
    {
      title: 'cut something out',
      meaning: 'remove part of something (usually with scissors and paper)',
      content: 'I cut this ad out of the newspaper.',
    },
    {
      title: 'do somebody / something over',
      meaning: 'beat up, ransack (BrE, informal)',
      content:
        "He's lucky to be alive. His shop was done over by a street gang.",
    },
    {
      title: 'do something over',
      meaning: 'do again (AmE)',
      content:
        "My teacher wants me to do my essay over because she doesn't like my topic.",
    },
    {
      title: 'do away with something',
      meaning: 'discard',
      content: "It's time to do away with all of these old tax records.",
    },
    {
      title: 'do something up',
      meaning: 'fasten, close',
      content: "Do your coat up before you go outside. It's snowing!",
    },
    {
      title: 'dress up',
      meaning: 'wear nice clothing',
      content: "It's a fancy restaurant so we have to dress up.",
    },
    {
      title: 'drop back',
      meaning: 'move back in a position/group',
      content: 'Andrea dropped back to third place when she fell off her bike.',
    },
    {
      title: 'drop in / by / over',
      meaning: 'come without an appointment',
      content: 'I might drop in/by/over for tea sometime this week.',
    },
    {
      title: 'drop somebody / something off',
      meaning: 'take somebody / something somewhere and leave them/it there',
      content: 'I have to drop my sister off at work before I come over.',
    },
    {
      title: 'drop out',
      meaning: 'quit a class, school etc',
      content: 'I dropped out of Science because it was too difficult.',
    },
    {
      title: 'eat out',
      meaning: 'eat at a restaurant',
      content: "I don't feel like cooking tonight. Let's eat out.",
    },
    {
      title: 'end up',
      meaning: 'eventually reach / do / decide',
      content: 'We ended up renting a movie instead of going to the theatre.',
    },
    {
      title: 'fall apart',
      meaning: 'break into pieces',
      content: 'My new dress fell apart in the washing machine.',
    },
    {
      title: 'fall down',
      meaning: 'fall to the ground',
      content:
        'The picture that you hung up last night fell down this morning.',
    },
    {
      title: 'fall out',
      meaning: 'separate from an interior',
      content: 'The money must have fallen out of my pocket.',
    },
    {
      title: 'fall out',
      meaning: '(of hair, teeth) become loose and unattached',
      content: 'His hair started to fall out when he was only 35.',
    },
    {
      title: 'figure something out',
      meaning: 'understand, find the answer',
      content:
        'I need to figure out how to fit the piano and the bookshelf in this room.',
    },
    {
      title: 'fill something in',
      meaning: 'to write information in blanks, as on a form (BrE)',
      content:
        'Please fill in the form with your name, address, and phone number.',
    },
    {
      title: 'fill something out',
      meaning: 'to write information in blanks, as on a form (AmE)',
      content: 'The form must be filled out in capital letters.',
    },
    {
      title: 'fill something up',
      meaning: 'fill to the top',
      content: 'I always fill the water jug up when it is empty.',
    },
    {
      title: 'find out',
      meaning: 'discover',
      content: "We don't know where he lives. How can we find out?",
    },
    {
      title: 'find something out',
      meaning: 'discover',
      content:
        'We tried to keep the time of the party a secret, but Samantha found it out.',
    },
    {
      title: 'get something across / over',
      meaning: 'communicate, make understandable',
      content:
        "I tried to get my point across/over to the judge but she wouldn't listen.",
    },
    {
      title: 'get along / on',
      meaning: 'like each other',
      content:
        'I was surprised how well my new girlfriend and my sister got along/on.',
    },
    {
      title: 'get around',
      meaning: 'have mobility',
      content: 'My grandfather can get around fine in his new wheelchair.',
    },
    {
      title: 'get away',
      meaning: 'go on a vacation',
      content:
        'We worked so hard this year that we had to get away for a week.',
    },
    {
      title: 'get away with something',
      meaning: 'do without being noticed or punished',
      content: 'Jason always gets away with cheating in his maths tests.',
    },
    {
      title: 'get back',
      meaning: 'return',
      content: 'We got back from our vacation last week.',
    },
    {
      title: 'get something back',
      meaning: 'receive something you had before',
      content: 'Liz finally got her Science notes back from my roommate.',
    },
    {
      title: 'get back at somebody',
      meaning: 'retaliate, take revenge',
      content:
        'My sister got back at me for stealing her shoes. She stole my favourite hat.',
    },
    {
      title: 'get back into something',
      meaning: 'become interested in something again',
      content: 'I finally got back into my novel and finished it.',
    },
    {
      title: 'get on something',
      meaning: 'step onto a vehicle',
      content:
        "We're going to freeze out here if you don't let us get on the bus.",
    },
    {
      title: 'get over something',
      meaning: 'recover from an illness, loss, difficulty',
      content: 'I just got over the flu and now my sister has it.',
    },
    {
      title: 'get over something',
      meaning: 'overcome a problem',
      content:
        "The company will have to close if it can't get over the new regulations.",
    },
    {
      title: 'get round to something',
      meaning: 'finally find time to do (AmE: get around to something)',
      content:
        "I don't know when I am going to get round to writing the thank you cards.",
    },
    {
      title: 'get together',
      meaning: 'meet (usually for social reasons)',
      content: "Let's get together for a BBQ this weekend.",
    },
    {
      title: 'get up',
      meaning: 'get out of bed',
      content: 'I got up early today to study for my exam.',
    },
    {
      title: 'get up',
      meaning: 'stand',
      content: 'You should get up and give the elderly man your seat.',
    },
    {
      title: 'give somebody away',
      meaning: 'reveal hidden information about somebody',
      content: 'His wife gave him away to the police.',
    },
    {
      title: 'give somebody away',
      meaning: 'take the bride to the altar',
      content: 'My father gave me away at my wedding.',
    },
    {
      title: 'give something away',
      meaning: 'ruin a secret',
      content: 'My little sister gave the surprise party away by accident.',
    },
    {
      title: 'give something away',
      meaning: 'give something to somebody for free',
      content: 'The library was giving away old books on Friday.',
    },
    {
      title: 'give something back',
      meaning: 'return a borrowed item',
      content:
        'I have to give these skates back to Franz before his hockey game.',
    },
    {
      title: 'give in',
      meaning: 'reluctantly stop fighting or arguing',
      content:
        "My boyfriend didn't want to go to the ballet, but he finally gave in.",
    },
    {
      title: 'give something out',
      meaning: 'give to many people (usually at no cost)',
      content:
        'They were giving out free perfume samples at the department store.',
    },
    {
      title: 'give something up',
      meaning: 'quit a habit',
      content: 'I am giving up smoking as of January 1st.',
    },
    {
      title: 'give up',
      meaning: 'stop trying',
      content: 'My maths homework was too difficult so I gave up.',
    },
    {
      title: 'go after somebody',
      meaning: 'follow somebody',
      content: 'My brother tried to go after the thief in his car.',
    },
    {
      title: 'go after something',
      meaning: 'try to achieve something',
      content: 'I went after my dream and now I am a published writer.',
    },
    {
      title: 'go against somebody',
      meaning: 'compete, oppose',
      content: 'We are going against the best soccer team in the city tonight.',
    },
    {
      title: 'go ahead',
      meaning: 'start, proceed',
      content: 'Please go ahead and eat before the food gets cold.',
    },
    {
      title: 'go back',
      meaning: 'return to a place',
      content: 'I have to go back home and get my lunch.',
    },
    {
      title: 'go out',
      meaning: 'leave home to go on a social event',
      content: "We're going out for dinner tonight.",
    },
    {
      title: 'go out with somebody',
      meaning: 'date',
      content: 'Jesse has been going out with Luke since they met last winter.',
    },
    {
      title: 'go over something',
      meaning: 'review',
      content: 'Please go over your answers before you submit your test.',
    },
    {
      title: 'go over',
      meaning: 'visit somebody nearby',
      content:
        "I haven't seen Tina for a long time. I think I'll go over for an hour or two.",
    },
    {
      title: 'go without something',
      meaning: 'suffer lack or deprivation',
      content: 'When I was young, we went without winter boots.',
    },
    {
      title: 'grow apart',
      meaning: 'stop being friends over time',
      content: 'My best friend and I grew apart after she changed schools.',
    },
    {
      title: 'grow back',
      meaning: 'regrow',
      content: 'My roses grew back this summer.',
    },
    {
      title: 'grow into something',
      meaning: 'grow big enough to fit',
      content:
        'This bike is too big for him now, but he should grow into it by next year.',
    },
    {
      title: 'grow out of something',
      meaning: 'get too big for',
      content:
        'Elizabeth needs a new pair of shoes because she has grown out of her old ones.',
    },
    {
      title: 'grow up',
      meaning: 'become an adult',
      content: 'When Jack grows up he wants to be a fireman.',
    },
    {
      title: 'hand something down',
      meaning: 'give something used to somebody else',
      content: 'I handed my old comic books down to my little cousin.',
    },
    {
      title: 'hand something in',
      meaning: 'submit',
      content: 'I have to hand in my essay by Friday.',
    },
    {
      title: 'hand something out',
      meaning: 'to distribute to a group of people',
      content: 'We will hand out the invitations at the door.',
    },
    {
      title: 'hand something over',
      meaning: 'give (usually unwillingly)',
      content:
        'The police asked the man to hand over his wallet and his weapons.',
    },
    {
      title: 'hang in',
      meaning: 'stay positive (informal)',
      content: "Hang in there. I'm sure you'll find a job very soon.",
    },
    {
      title: 'hang on',
      meaning: 'wait a short time (informal)',
      content: 'Hang on while I grab my coat and shoes!',
    },
    {
      title: 'hang out',
      meaning: 'spend time relaxing (informal)',
      content:
        'Instead of going to the party we are just going to hang out at my place.',
    },
    {
      title: 'hang up',
      meaning: 'end a phone call',
      content: "He didn't say goodbye before he hung up.",
    },
    {
      title: 'hold somebody / something back',
      meaning: 'prevent from doing/going',
      content: 'I had to hold my dog back because there was a cat in the park.',
    },
    {
      title: 'hold something back',
      meaning: 'hide an emotion',
      content: "Jamie held back his tears at his grandfather's funeral.",
    },
    {
      title: 'hold on',
      meaning: 'wait a short time',
      content: 'Please hold on while I transfer you to the Sales Department.',
    },
    {
      title: 'hold onto somebody / something',
      meaning: 'hold firmly using your hands or arms',
      content: "Hold onto your hat because it's very windy outside.",
    },
    {
      title: 'hold somebody / something up',
      meaning: 'rob',
      content: 'A man in a black mask held the bank up this morning.',
    },
    {
      title: 'keep on doing something',
      meaning: 'continue doing',
      content: 'Keep on stirring until the liquid comes to a boil.',
    },
    {
      title: 'keep something from somebody',
      meaning: 'not tell',
      content: 'We kept our relationship from our parents for two years.',
    },
    {
      title: 'keep somebody / something out',
      meaning: 'stop from entering',
      content: 'Try to keep the wet dog out of the living room.',
    },
    {
      title: 'keep something up',
      meaning: 'continue at the same rate',
      content:
        'If you keep those results up you will get into a great college.',
    },
    {
      title: 'let somebody down',
      meaning: 'fail to support or help, disappoint',
      content: "I need you to be on time. Don't let me down this time.",
    },
    {
      title: 'let somebody in',
      meaning: 'allow to enter',
      content: 'Can you let the cat in before you go to school?',
    },
    {
      title: 'log in (or on)',
      meaning: 'sign in (to a website, database etc)',
      content: "I can't log in to Facebook because I've forgotten my password.",
    },
    {
      title: 'log out (or off)',
      meaning: 'sign out (of a website, database etc)',
      content: "If you don't log off somebody could get into your account.",
    },
    {
      title: 'look after somebody / something',
      meaning: 'take care of',
      content: 'I have to look after my sick grandmother.',
    },
    {
      title: 'look down on somebody',
      meaning: 'think less of, consider inferior',
      content:
        'Ever since we stole that chocolate bar your dad has looked down on me.',
    },
    {
      title: 'look for somebody / something',
      meaning: 'try to find',
      content: "I'm looking for a red dress for the wedding.",
    },
    {
      title: 'look forward to something',
      meaning: 'be excited about the future',
      content: "I'm looking forward to the Christmas break.",
    },
    {
      title: 'look into something',
      meaning: 'investigate',
      content: 'We are going to look into the price of snowboards today.',
    },
    {
      title: 'look out',
      meaning: 'be careful, vigilant, and take notice',
      content: "Look out! That car's going to hit you!",
    },
    {
      title: 'look out for somebody/ something',
      meaning: 'be especially vigilant for',
      content: "Don't forget to look out for snakes on the hiking trail.",
    },
    {
      title: 'look something over',
      meaning: 'check, examine',
      content: 'Can you look over my essay for spelling mistakes?',
    },
    {
      title: 'look something up',
      meaning: 'search and find information in a reference book or database',
      content: 'We can look her phone number up on the Internet.',
    },
    {
      title: 'look up to somebody',
      meaning: 'have a lot of respect for',
      content: 'My little sister has always looked up to me.',
    },
    {
      title: 'make something up',
      meaning: 'invent, lie about something',
      content: 'Josie made up a story about why we were late.',
    },
    {
      title: 'make up',
      meaning: 'forgive each other',
      content: 'We were angry last night, but we made up at breakfast.',
    },
    {
      title: 'make somebody up',
      meaning: 'apply cosmetics to',
      content: 'My sisters made me up for my graduation party.',
    },
    {
      title: 'mix something up',
      meaning: 'confuse two or more things',
      content: "I mixed up the twins' names again!",
    },
    {
      title: 'pass away',
      meaning: 'die',
      content: 'His uncle passed away last night after a long illness.',
    },
    {
      title: 'pass out',
      meaning: 'faint',
      content: 'It was so hot in the church that an elderly lady passed out.',
    },
    {
      title: 'pass something out',
      meaning: 'give the same thing to many people',
      content: 'The professor passed the textbooks out before class.',
    },
    {
      title: 'pass something up',
      meaning: 'decline (usually something good)',
      content: 'I passed up the job because I am afraid of change.',
    },
    {
      title: 'pay somebody back',
      meaning: 'return owed money',
      content: "Thanks for buying my ticket. I'll pay you back on Friday.",
    },
    {
      title: 'pay for something',
      meaning: 'be punished for doing something bad',
      content: 'That bully will pay for being mean to my little brother.',
    },
    {
      title: 'pick something out',
      meaning: 'choose',
      content: 'I picked out three sweaters for you to try on.',
    },
    {
      title: 'point somebody / something out',
      meaning: 'indicate with your finger',
      content: "I'll point my boyfriend out when he runs by.",
    },
    {
      title: 'put something down',
      meaning: 'put what you are holding on a surface or floor',
      content: 'You can put the groceries down on the kitchen counter.',
    },
    {
      title: 'put somebody down',
      meaning: 'insult, make somebody feel stupid',
      content:
        'The students put the substitute teacher down because his pants were too short.',
    },
    {
      title: 'put something off',
      meaning: 'postpone',
      content:
        'We are putting off our trip until January because of the hurricane.',
    },
    {
      title: 'put something out',
      meaning: 'extinguish',
      content: 'The neighbours put the fire out before the firemen arrived.',
    },
    {
      title: 'put something together',
      meaning: 'assemble',
      content: 'I have to put the crib together before the baby arrives.',
    },
    {
      title: 'put up with somebody / something',
      meaning: 'tolerate',
      content:
        "I don't think I can put up with three small children in the car.",
    },
    {
      title: 'put something on',
      meaning: 'put clothing/ accessories on your body',
      content: "Don't forget to put on your new earrings for the party.",
    },
    {
      title: 'run into somebody / something',
      meaning: 'meet unexpectedly',
      content: 'I ran into an old school-friend at the mall.',
    },
    {
      title: 'run over somebody / something',
      meaning: 'drive a vehicle over a person or thing',
      content: 'I accidentally ran over your bicycle in the driveway.',
    },
    {
      title: 'run over / through something',
      meaning: 'rehearse, review',
      content:
        "Let's run over/through these lines one more time before the show.",
    },
    {
      title: 'run away',
      meaning: 'leave unexpectedly, escape',
      content:
        'The child ran away from home and has been missing for three days.',
    },
    {
      title: 'run out',
      meaning: 'have none left',
      content: 'We ran out of shampoo so I had to wash my hair with soap.',
    },
    {
      title: 'send something back',
      meaning: 'return (usually by mail)',
      content: 'My letter got sent back to me because I used the wrong stamp.',
    },
    {
      title: 'set something up',
      meaning: 'arrange, organize',
      content: 'Our boss set a meeting up with the president of the company.',
    },
    {
      title: 'set somebody up',
      meaning: 'trick, trap',
      content: 'The police set up the car thief by using a hidden camera.',
    },
    {
      title: 'shop around',
      meaning: 'compare prices',
      content: 'I want to shop around a little before I decide on these boots.',
    },
    {
      title: 'show off',
      meaning: 'act extra special for people watching (usually boastfully)',
      content: 'He always shows off on his skateboard.',
    },
    {
      title: 'sleep over',
      meaning: 'stay somewhere for the night (informal)',
      content:
        'You should sleep over tonight if the weather is too bad to drive home.',
    },
    {
      title: 'sort something out',
      meaning: 'organize, resolve a problem',
      content: 'We need to sort the bills out before the first of the month.',
    },
    {
      title: 'stick to something',
      meaning:
        'continue doing something, limit yourself to one particular thing',
      content: 'You will lose weight if you stick to the diet.',
    },
    {
      title: 'switch something off',
      meaning: 'stop the energy flow, turn off',
      content: "The light's too bright. Could you switch it off?",
    },
    {
      title: 'switch something on',
      meaning: 'start the energy flow, turn on',
      content: 'We heard the news as soon as we switched on the car radio.',
    },
    {
      title: 'take after somebody',
      meaning: 'resemble a family member',
      content: 'I take after my mother. We are both impatient.',
    },
    {
      title: 'take something apart',
      meaning: 'purposely break into pieces',
      content: 'He took the car brakes apart and found the problem.',
    },
    {
      title: 'take something back',
      meaning: 'return an item',
      content: "I have to take our new TV back because it doesn't work.",
    },
    {
      title: 'take off',
      meaning: 'start to fly',
      content: 'My plane takes off in five minutes.',
    },
    {
      title: 'take something off',
      meaning: 'remove something (usually clothing)',
      content: 'Take off your socks and shoes and come in the lake!',
    },
    {
      title: 'take something out',
      meaning: 'remove from a place or thing',
      content: 'Can you take the garbage out to the street for me?',
    },
    {
      title: 'take somebody out',
      meaning: 'pay for somebody to go somewhere with you',
      content: 'My grandparents took us out for dinner and a movie.',
    },
    {
      title: 'tear something up',
      meaning: 'rip into pieces',
      content: "I tore up my ex-boyfriend's letters and gave them back to him.",
    },
    {
      title: 'think back',
      meaning: 'remember (often + to, sometimes + on)',
      content: 'When I think back on my youth, I wish I had studied harder.',
    },
    {
      title: 'think something over',
      meaning: 'consider',
      content:
        "I'll have to think this job offer over before I make my final decision.",
    },
    {
      title: 'throw something away',
      meaning: 'dispose of',
      content: 'We threw our old furniture away when we won the lottery.',
    },
    {
      title: 'turn something down',
      meaning: 'decrease the volume or strength (heat, light etc)',
      content: 'Please turn the TV down while the guests are here.',
    },
    {
      title: 'turn something down',
      meaning: 'refuse',
      content: "I turned the job down because I don't want to move.",
    },
    {
      title: 'turn something off',
      meaning: 'stop the energy flow, switch off',
      content: 'Your mother wants you to turn the TV off and come for dinner.',
    },
    {
      title: 'turn something on',
      meaning: 'start the energy, switch on',
      content: "It's too dark in here. Let's turn some lights on.",
    },
    {
      title: 'turn something up',
      meaning: 'increase the volume or strength (heat, light etc)',
      content: 'Can you turn the music up? This is my favourite song.',
    },
    {
      title: 'turn up',
      meaning: 'appear suddenly',
      content:
        'Our cat turned up after we put posters up all over the neighbourhood.',
    },
    {
      title: 'try something on',
      meaning: 'sample clothing',
      content:
        "I'm going to try these jeans on, but I don't think they will fit.",
    },
    {
      title: 'try something out',
      meaning: 'test',
      content: 'I am going to try this new brand of detergent out.',
    },
    {
      title: 'use something up',
      meaning: 'finish the supply',
      content:
        'The kids used all of the toothpaste up so we need to buy some more.',
    },
    {
      title: 'wake up',
      meaning: 'stop sleeping',
      content: 'We have to wake up early for work on Monday.',
    },
    {
      title: 'warm somebody / something up',
      meaning: 'increase the temperature',
      content: 'You can warm your feet up in front of the fireplace.',
    },
    {
      title: 'warm up',
      meaning: 'prepare body for exercise',
      content: 'I always warm up by doing sit-ups before I go for a run.',
    },
    {
      title: 'wear off',
      meaning: 'fade away',
      content: 'Most of my make-up wore off before I got to the party.',
    },
    {
      title: 'work out',
      meaning: 'exercise',
      content: 'I work out at the gym three times a week.',
    },
    {
      title: 'work out',
      meaning: 'be successful',
      content: 'Our plan worked out fine.',
    },
    {
      title: 'work something out',
      meaning: 'make a calculation',
      content: 'We have to work out the total cost before we buy the house.',
    },
  ];

  const getRandomColor = () => {
    const colors = [
      '#f8d7da',
      '#d4edda',
      '#fff3cd',
      '#d1ecf1',
      '#d6d8d9',
      '#cce5ff',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className='App'>
      <div className='card-container'>
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            meaning={card.meaning}
            content={card.content}
            color={getRandomColor()}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      <Content selectedCard={selectedCard} />
    </div>
  );
}

export default App;
