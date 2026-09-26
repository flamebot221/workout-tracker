// PUMPD 12-Week Transformation Engine & Gym Tracker
// Built specifically for 94.5 kg -> 85 kg goal with 8:30 PM routine & Exercise Form Demonstrations

// ----------------------------------------------------
// 1. DATA STRUCTURES & EXERCISE REPOSITORY
// ----------------------------------------------------
const WORKOUT_DAYS = [
  {
    id: 'mon',
    name: 'Monday',
    title: 'Upper Body A',
    subtitle: 'Chest Strength & Lat Width Focus',
    badge: 'Upper A',
    time: '8:30 PM &bull; 75–90 min',
    muscles: [
      { id: 'chest', role: 'Primary' },
      { id: 'lats', role: 'Primary' },
      { id: 'front-shoulders', role: 'Secondary' },
      { id: 'triceps', role: 'Secondary' },
      { id: 'biceps', role: 'Secondary' }
    ],
    warmup: '8 min stationary bike (moderate) + 1 light practice set before bench and lat pulldown.',
    cardio: '12–15 min stationary bike, incline treadmill walk, or elliptical (conversational pace).',
    exercises: [
      {
        id: 'ex_db_flat_bench',
        name: 'Dumbbell Flat Bench Press',
        alt: 'Barbell Flat Bench Press',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 100,
        equipment: 'Dumbbells + Flat Bench',
        primaryMuscle: 'chest',
        cues: 'Retract shoulder blades, slight arch in lower back, lower dumbbells under control to chest level.',
        note: 'Upper/mid pec builder. Building pec muscle tightens chest tissue and eliminates manboob appearance.'
      },
      {
        id: 'ex_lat_pulldown',
        name: 'Lat Pulldown',
        alt: 'Neutral-Grip Lat Pulldown',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 100,
        equipment: 'Cable Lat Machine',
        primaryMuscle: 'lats',
        cues: 'Slight lean back (15°), pull elbows straight down towards your back pockets. No swinging.',
        note: 'Broadens upper back, creating a V-taper taper that makes waist and love handles look smaller.'
      },
      {
        id: 'ex_seated_db_press',
        name: 'Seated DB Shoulder Press',
        alt: 'Machine Shoulder Press',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 90,
        equipment: 'Dumbbells + 75° Bench',
        primaryMuscle: 'front-shoulders',
        cues: 'Elbows slightly tucked at 45°. Press overhead in smooth controlled arc without clanking dumbbells.',
        note: 'Builds side and front shoulder caps for athletic proportions.'
      },
      {
        id: 'ex_chest_supp_row',
        name: 'Chest-Supported Row',
        alt: 'Seated Cable Row',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 90,
        equipment: 'Incline Bench or Machine',
        primaryMuscle: 'lats',
        cues: 'Sternum pressed into pad. Pull elbows back, squeeze mid-back hard for 1 full second.',
        note: 'Reverses forward slouched posture, immediately lifting and squaring the chest.'
      },
      {
        id: 'ex_cable_triceps_pressdown',
        name: 'Cable Triceps Pressdown',
        alt: 'Rope Triceps Pushdown',
        sets: 2,
        minReps: 10,
        maxReps: 15,
        rest: 65,
        equipment: 'Cable Station + Bar/Rope',
        primaryMuscle: 'triceps',
        cues: 'Pin elbows to your ribs. Push straight down, lock out triceps with strict control.',
        note: 'Direct triceps isolation for lean, firm upper arm definition.'
      },
      {
        id: 'ex_db_biceps_curl',
        name: 'Dumbbell Biceps Curl',
        alt: 'EZ Bar Curl',
        sets: 2,
        minReps: 10,
        maxReps: 15,
        rest: 65,
        equipment: 'Dumbbells',
        primaryMuscle: 'biceps',
        cues: 'Supinate wrists (turn palms upwards) at top of movement. Full extension at bottom.',
        note: 'Peak biceps contraction.'
      }
    ]
  },
  {
    id: 'tue',
    name: 'Tuesday',
    title: 'Lower Body A',
    subtitle: 'Quad Power & Posterior Chain',
    badge: 'Lower A',
    time: '8:30 PM &bull; 75–90 min',
    muscles: [
      { id: 'quadriceps', role: 'Primary' },
      { id: 'hamstrings', role: 'Primary' },
      { id: 'glutes', role: 'Primary' },
      { id: 'calves', role: 'Secondary' },
      { id: 'abs', role: 'Core' }
    ],
    warmup: '8 min stationary bike (moderate) + 1 light practice set on Leg Press & RDL.',
    cardio: '12–15 min stationary bike, incline treadmill walk, or elliptical (conversational pace).',
    exercises: [
      {
        id: 'ex_leg_press',
        name: 'Leg Press',
        alt: 'Hack Squat Machine',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 105,
        equipment: '45° Leg Press Machine',
        primaryMuscle: 'quadriceps',
        cues: 'Feet shoulder-width in middle of sled. Deep range of motion without lower back peeling off pad.',
        note: 'Heavy quad stimulus with zero lower back strain.'
      },
      {
        id: 'ex_db_rdl',
        name: 'Dumbbell Romanian Deadlift (RDL)',
        alt: 'Barbell RDL',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 105,
        equipment: 'Dumbbells',
        primaryMuscle: 'hamstrings',
        cues: 'Soft knees, push hips straight back into the wall. Feel intense stretch in hamstrings.',
        note: 'Tones hamstrings and glutes, countering thick lower body fat storage.'
      },
      {
        id: 'ex_walking_lunge',
        name: 'Walking Lunge',
        alt: 'DB Reverse Lunges',
        sets: 2,
        minReps: 10,
        maxReps: 12,
        isPerLeg: true,
        rest: 75,
        equipment: 'Dumbbells or Bodyweight',
        primaryMuscle: 'quadriceps',
        cues: '10–12 strides per leg. Upright posture, back knee kisses floor lightly.',
        note: 'Unilateral leg strength, balance, and massive caloric burn.'
      },
      {
        id: 'ex_seated_leg_curl',
        name: 'Seated or Lying Leg Curl',
        alt: 'Lying Hamstring Curl',
        sets: 3,
        minReps: 10,
        maxReps: 15,
        rest: 70,
        equipment: 'Leg Curl Machine',
        primaryMuscle: 'hamstrings',
        cues: 'Pull heels firmly under seat. Resist the negative on the way up.',
        note: 'Direct hamstring isolation.'
      },
      {
        id: 'ex_standing_calf_raise',
        name: 'Standing Calf Raise',
        alt: 'Smith Machine Calf Raise',
        sets: 3,
        minReps: 12,
        maxReps: 15,
        rest: 60,
        equipment: 'Calf Machine or Step + DB',
        primaryMuscle: 'calves',
        cues: 'Deep 2-second stretch at bottom, explosive rise onto balls of feet, 1s peak hold.',
        note: 'Lower leg definition and ankle stability.'
      },
      {
        id: 'ex_front_plank',
        name: 'Front Plank',
        alt: 'RKC Tension Plank',
        sets: 3,
        minReps: 30,
        maxReps: 60,
        isSeconds: true,
        rest: 60,
        equipment: 'Floor Mat',
        primaryMuscle: 'abs',
        cues: 'Forearms parallel, squeeze glutes, brace abs like taking a punch. No sagging hips.',
        note: 'Strengthens the transverse abdominis, naturally sucking in and flattening the stomach.'
      }
    ]
  },
  {
    id: 'wed',
    name: 'Wednesday',
    title: 'Cardio + Core',
    subtitle: 'Active Deficit & Waist Tightening',
    badge: 'Cardio & Core',
    time: '8:30 PM &bull; 60–75 min',
    muscles: [
      { id: 'abs', role: 'Core' },
      { id: 'obliques', role: 'Waist' }
    ],
    warmup: '2 min easy bike spin before steady state.',
    cardio: '35 minutes on stationary bike, elliptical, or incline treadmill walk at steady, conversational pace.',
    exercises: [
      {
        id: 'ex_dead_bug',
        name: 'Dead Bug',
        alt: 'Bird Dog',
        sets: 3,
        minReps: 10,
        maxReps: 10,
        isPerLeg: true,
        rest: 50,
        equipment: 'Floor Mat',
        primaryMuscle: 'abs',
        cues: 'Lower opposite arm and leg while pressing your lower back flush into the ground. 10 reps per side.',
        note: 'Replaces daily weighted sit-ups; protects the spine while teaching deep abdominal control.'
      },
      {
        id: 'ex_side_plank',
        name: 'Side Plank',
        alt: 'Elevated Side Plank',
        sets: 3,
        minReps: 25,
        maxReps: 40,
        isSeconds: true,
        isPerLeg: true,
        rest: 50,
        equipment: 'Floor Mat',
        primaryMuscle: 'obliques',
        cues: 'Elbow directly under shoulder. Straight diagonal line from head to heels. 25–40s per side.',
        note: 'Tightens the side abdominal wall without bulking love handles like weighted side bends.'
      },
      {
        id: 'ex_pallof_press',
        name: 'Pallof Press',
        alt: 'Band Anti-Rotation Press',
        sets: 3,
        minReps: 12,
        maxReps: 12,
        isPerLeg: true,
        rest: 50,
        equipment: 'Cable Station or Band',
        primaryMuscle: 'obliques',
        cues: 'Stand perpendicular to cable at chest height. Press handle out, resisting rotational pull. 12 reps per side.',
        note: 'The #1 science-backed anti-rotation exercise for a tighter, narrower waist.'
      }
    ]
  },
  {
    id: 'thu',
    name: 'Thursday',
    title: 'Upper Body B',
    subtitle: 'Incline Pec Shelf & Back Density',
    badge: 'Upper B',
    time: '8:30 PM &bull; 75–90 min',
    muscles: [
      { id: 'chest', role: 'Primary' },
      { id: 'lats', role: 'Primary' },
      { id: 'rear-shoulders', role: 'Secondary' },
      { id: 'front-shoulders', role: 'Secondary' },
      { id: 'triceps', role: 'Secondary' },
      { id: 'biceps', role: 'Secondary' }
    ],
    warmup: '8 min stationary bike (moderate) + 1 practice set on Incline Bench & Cable Row.',
    cardio: '12–15 min stationary bike, incline treadmill walk, or elliptical (conversational pace).',
    exercises: [
      {
        id: 'ex_incline_db_bench',
        name: 'Incline Dumbbell Bench Press',
        alt: 'Incline Barbell Bench Press',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 100,
        equipment: 'Dumbbells + 30° Incline Bench',
        primaryMuscle: 'chest',
        cues: 'Set incline to 30°. Press dumbbells up and slightly inward over your clavicles with controlled negative.',
        note: 'The single most effective lift for upper chest fullness, creating defined athletic pecs.'
      },
      {
        id: 'ex_seated_cable_row',
        name: 'Seated Cable Row',
        alt: 'Chest-Supported T-Bar Row',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 100,
        equipment: 'Cable Row Station',
        primaryMuscle: 'lats',
        cues: 'Close-grip V-handle. Sit tall, pull to abdomen, drive elbows back and squeeze shoulder blades.',
        note: 'Builds dense mid-back thickness.'
      },
      {
        id: 'ex_assisted_pullup',
        name: 'Assisted Pull-Up or Neutral Lat Pulldown',
        alt: 'Neutral-Grip Lat Pulldown',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 90,
        equipment: 'Assisted Machine or Cable',
        primaryMuscle: 'lats',
        cues: 'Palms facing each other. Full stretch at bottom, drive chest up toward handles.',
        note: 'Builds upper body pulling power and back taper.'
      },
      {
        id: 'ex_db_lateral_raise',
        name: 'Dumbbell Lateral Raise',
        alt: 'Cable Lateral Raise',
        sets: 3,
        minReps: 12,
        maxReps: 15,
        rest: 65,
        equipment: 'Light Dumbbells',
        primaryMuscle: 'front-shoulders',
        cues: 'Slight forward lean, raise arms to sides leading with elbows. Control the descent.',
        note: 'Creates round side deltoids to broaden shoulder frame.'
      },
      {
        id: 'ex_face_pull',
        name: 'Face Pull',
        alt: 'Rear Delt Fly Machine',
        sets: 2,
        minReps: 12,
        maxReps: 15,
        rest: 65,
        equipment: 'Cable Machine + Rope',
        primaryMuscle: 'rear-shoulders',
        cues: 'Rope at eye level. Pull hands toward ears, rotating thumbs backward. 1s squeeze.',
        note: 'Pulls forward shoulders back, instantly improving chest posture.'
      },
      {
        id: 'ex_overhead_triceps_ext',
        name: 'Overhead Cable Triceps Extension',
        alt: 'DB Overhead Triceps Extension',
        sets: 2,
        minReps: 10,
        maxReps: 15,
        rest: 65,
        equipment: 'Cable Station + Rope',
        primaryMuscle: 'triceps',
        cues: 'Facing away from pulley. Extend arms fully overhead with elbows stationary.',
        note: 'Emphasizes long head of triceps.'
      },
      {
        id: 'ex_hammer_curl',
        name: 'Hammer Curl',
        alt: 'Rope Hammer Curl',
        sets: 2,
        minReps: 10,
        maxReps: 15,
        rest: 65,
        equipment: 'Dumbbells',
        primaryMuscle: 'biceps',
        cues: 'Neutral grip (palms facing each other). Curl with zero body momentum.',
        note: 'Builds forearm and outer arm thickness.'
      }
    ]
  },
  {
    id: 'fri',
    name: 'Friday',
    title: 'Lower Body B',
    subtitle: 'Squat Strength & Glute Reshaping',
    badge: 'Lower B',
    time: '8:30 PM &bull; 75–90 min',
    muscles: [
      { id: 'quadriceps', role: 'Primary' },
      { id: 'glutes', role: 'Primary' },
      { id: 'hamstrings', role: 'Secondary' },
      { id: 'calves', role: 'Secondary' },
      { id: 'abs', role: 'Core' }
    ],
    warmup: '8 min stationary bike (moderate) + 1 practice set on Goblet Squat & Hip Thrust.',
    cardio: '12–15 min stationary bike, incline treadmill walk, or elliptical (conversational pace).',
    exercises: [
      {
        id: 'ex_goblet_squat',
        name: 'Goblet Squat or Hack Squat Machine',
        alt: 'Hack Squat Machine',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 105,
        equipment: 'Heavy DB / Kettlebell or Hack Machine',
        primaryMuscle: 'quadriceps',
        cues: 'DB cupped at chest. Squat between knees until thighs hit parallel, drive through full foot.',
        note: 'Deep squat mechanics with zero spinal risk.'
      },
      {
        id: 'ex_hip_thrust',
        name: 'Hip Thrust Machine or Barbell Hip Thrust',
        alt: 'Barbell Hip Thrust',
        sets: 3,
        minReps: 8,
        maxReps: 12,
        rest: 105,
        equipment: 'Hip Thrust Machine or Barbell',
        primaryMuscle: 'glutes',
        cues: 'Drive through heels to full hip extension, tuck chin, hold peak squeeze for 1 second.',
        note: 'Reshapes the glutes and burns massive calories to trim waist/butt fat.'
      },
      {
        id: 'ex_bulgarian_split_squat',
        name: 'Bulgarian Split Squat',
        alt: 'Reverse Lunges',
        sets: 2,
        minReps: 8,
        maxReps: 10,
        isPerLeg: true,
        rest: 90,
        equipment: 'Bench + Dumbbells',
        primaryMuscle: 'quadriceps',
        cues: 'Back foot on bench. Lower until front thigh is parallel. 8–10 reps per leg.',
        note: 'Intense single-leg strength for quad separation.'
      },
      {
        id: 'ex_leg_extension',
        name: 'Leg Extension',
        alt: 'Sissy Squat',
        sets: 2,
        minReps: 12,
        maxReps: 15,
        rest: 65,
        equipment: 'Leg Extension Machine',
        primaryMuscle: 'quadriceps',
        cues: 'Sit back into pad, control weight up and down with 2s negative. No swinging.',
        note: 'Quad definition (executed as planned work, not as daily warm-up).'
      },
      {
        id: 'ex_seated_leg_curl_b',
        name: 'Seated Leg Curl',
        alt: 'Lying Leg Curl',
        sets: 2,
        minReps: 10,
        maxReps: 15,
        rest: 65,
        equipment: 'Leg Curl Machine',
        primaryMuscle: 'hamstrings',
        cues: 'Controlled eccentric descent. Full hamstring contraction.',
        note: 'Posterior thigh balance.'
      },
      {
        id: 'ex_seated_calf_raise',
        name: 'Seated Calf Raise',
        alt: 'Standing Calf Raise',
        sets: 3,
        minReps: 12,
        maxReps: 15,
        rest: 60,
        equipment: 'Seated Calf Machine',
        primaryMuscle: 'calves',
        cues: 'Bended knee calf focus targeting the deep soleus muscle. 2s stretch at bottom.',
        note: 'Complements standing calf work.'
      },
      {
        id: 'ex_reverse_crunch',
        name: 'Reverse Crunch',
        alt: 'Hanging Leg Raise',
        sets: 3,
        minReps: 10,
        maxReps: 15,
        rest: 60,
        equipment: 'Floor Mat or Bench',
        primaryMuscle: 'abs',
        cues: 'Curl knees up toward chest, lifting tailbone slightly off mat without momentum.',
        note: 'Lower abdominal focus.'
      }
    ]
  },
  {
    id: 'sat',
    name: 'Saturday',
    title: 'Cardio + Core',
    subtitle: 'Fat Burn & Core Endurance',
    badge: 'Cardio & Core',
    time: '8:30 PM &bull; 60–75 min',
    muscles: [
      { id: 'abs', role: 'Core' },
      { id: 'obliques', role: 'Core' },
      { id: 'glutes', role: 'Posterior' }
    ],
    warmup: '2 min easy pace.',
    cardio: '40 minutes on bike, elliptical, or incline treadmill walk at steady, conversational pace.',
    exercises: [
      {
        id: 'ex_bird_dog',
        name: 'Bird Dog',
        alt: 'Superman Hold',
        sets: 3,
        minReps: 10,
        maxReps: 10,
        isPerLeg: true,
        rest: 50,
        equipment: 'Floor Mat',
        primaryMuscle: 'glutes',
        cues: 'On hands and knees, reach opposite arm and leg parallel to floor. Hold 2s. 10 reps/side.',
        note: 'Strengthens lower back, glutes, and posterior stability.'
      },
      {
        id: 'ex_side_plank_sat',
        name: 'Side Plank',
        alt: 'Side Plank Pulse',
        sets: 3,
        minReps: 25,
        maxReps: 40,
        isSeconds: true,
        isPerLeg: true,
        rest: 50,
        equipment: 'Floor Mat',
        primaryMuscle: 'obliques',
        cues: 'Keep hips stacked and body rigid. 25–40 seconds per side.',
        note: 'Side core endurance.'
      },
      {
        id: 'ex_cable_wood_chop',
        name: 'Cable Wood Chop',
        alt: 'Dumbbell Wood Chop',
        sets: 3,
        minReps: 12,
        maxReps: 12,
        isPerLeg: true,
        rest: 50,
        equipment: 'Cable Machine',
        primaryMuscle: 'obliques',
        cues: 'Diagonal high-to-low or low-to-high rotation using your torso. 12 reps per side.',
        note: 'Dynamic rotational waist power.'
      }
    ]
  },
  {
    id: 'sun',
    name: 'Sunday',
    title: 'Rest & Active Recovery',
    subtitle: 'Recharge Nervous System & Rebuild',
    badge: 'Rest Day',
    time: 'Recovery',
    muscles: [],
    warmup: 'No lifting today. Your body grows and adapts during deep rest.',
    cardio: '25–35 min relaxed walk to enhance active blood flow and recovery.',
    exercises: []
  }
];

// ----------------------------------------------------
// 2. EXERCISE DEMONSTRATION & TECHNIQUE DATABASE
// ----------------------------------------------------
const EXERCISE_DEMOS = {
  'ex_db_flat_bench': {
    videoId: 'Cfp23zvkAfI',
    setup: [
      'Sit on edge of flat bench with dumbbells resting vertically on your thighs.',
      'Kick dumbbells up to chest as you lie back. Plant feet firmly flat on the floor.',
      'Retract shoulder blades (pinch them together into the bench pad) to protect shoulders.'
    ],
    execution: [
      'Position elbows at a 45–60° angle to your torso (not flared wide at 90°).',
      'Lower weights smoothly for 2–3 seconds until you feel a deep, comfortable stretch across chest.',
      'Drive through your feet, exhale, and press dumbbells upward in a slight triangle arc.'
    ],
    mistakes: [
      'Flaring elbows out to 90° (causes severe shoulder rotator cuff impingement).',
      'Arching lower back so excessively that butt leaves the bench.',
      'Bouncing or dropping the dumbbells quickly at the bottom.'
    ],
    breathing: 'Inhale deeply on the controlled descent; exhale forcefully as you press upward.'
  },
  'ex_lat_pulldown': {
    videoId: 'CAwf7n6Luuc',
    setup: [
      'Adjust thigh pad so your knees are securely locked in with feet flat on the floor.',
      'Grip the bar slightly wider than shoulder width with an overhand grip.',
      'Sit tall with chest lifted and lean back slightly (around 10–15°).'
    ],
    execution: [
      'Initiate pull by driving elbows straight down and back toward your hip pockets.',
      'Pull bar down until it touches or hovers right at your upper collarbone.',
      'Control the bar back up with a slow 3-second eccentric to feel full lat stretch at top.'
    ],
    mistakes: [
      'Swinging your entire torso backward to yank the weight down with momentum.',
      'Pulling the bar behind the neck (dangerous for cervical spine and rotator cuffs).',
      'Shrugging shoulders up toward ears at the bottom.'
    ],
    breathing: 'Exhale as you pull down to chest; inhale on the controlled return upward.'
  },
  'ex_seated_db_press': {
    videoId: 'qEwKCR5JCog',
    setup: [
      'Set bench to a high incline (approx 75–80°, slightly off vertical to reduce shoulder pinching).',
      'Kick dumbbells to shoulder level with elbows slightly in front of shoulders.',
      'Keep core braced and feet firmly planted.'
    ],
    execution: [
      'Press dumbbells directly overhead until arms are extended but elbows not violently locked.',
      'Lower weights under control until dumbbells are level with ears/chin.',
      'Maintain steady torso without hyperextending your lower back.'
    ],
    mistakes: [
      'Flaring elbows straight out to the sides (keep them angled 30–45° inward).',
      'Clanking dumbbells together at the top (wastes energy and reduces tension).',
      'Excessively arching the lower back off the bench pad.'
    ],
    breathing: 'Inhale on the slow descent; exhale on the overhead press.'
  },
  'ex_chest_supp_row': {
    videoId: '0UBRfiO4zDs',
    setup: [
      'Set bench to a 30–45° incline. Lie face down with sternum supported by the pad.',
      'Hold dumbbells with neutral or overhand grip, arms hanging naturally down.',
      'Keep chin tucked and neck neutral.'
    ],
    execution: [
      'Drive elbows back past your torso, squeezing shoulder blades together hard.',
      'Pause and hold the contraction for 1 full second at the peak.',
      'Lower weights slowly until you feel full stretch in upper back and lats.'
    ],
    mistakes: [
      'Lifting chest off the pad to cheat with lower back momentum.',
      'Shrugging upper traps rather than pulling with mid-back and lats.'
    ],
    breathing: 'Exhale as you pull elbows back; inhale as you lower the weights.'
  },
  'ex_cable_triceps_pressdown': {
    videoId: '2-LAMcpzODU',
    setup: [
      'Attach a straight bar, V-bar, or rope to the high cable pulley.',
      'Stand with feet hip-width, slight forward hinge at hips, elbows pinned to your ribs.'
    ],
    execution: [
      'Keep upper arms stationary; extend forearms downward by contracting triceps.',
      'Lock out arms at bottom and squeeze triceps for a beat.',
      'Return handle up until elbows reach roughly 90°, maintaining constant tension.'
    ],
    mistakes: [
      'Allowing elbows to swing forward and backward (turns it into a shoulder movement).',
      'Using bodyweight momentum to press the cable down.'
    ],
    breathing: 'Exhale as you press down to lockout; inhale as you return to 90°.'
  },
  'ex_db_biceps_curl': {
    videoId: 'ykJmrZ5v0Oo',
    setup: [
      'Stand tall or sit upright with dumbbells at your sides, palms facing inward.',
      'Keep shoulders pulled down and back.'
    ],
    execution: [
      'Curl dumbbells upward, supinating wrists (turning palms to face ceiling) halfway up.',
      'Squeeze biceps at the top without letting elbows drift forward.',
      'Lower under 2–3 second control to full arm extension.'
    ],
    mistakes: [
      'Swinging hips or leaning back to fling weights up.',
      'Cutting the bottom range of motion short (stretch is crucial for growth).'
    ],
    breathing: 'Exhale as you curl upward; inhale as you lower the dumbbells.'
  },
  'ex_leg_press': {
    videoId: 'IZxyjW7MPJQ',
    setup: [
      'Sit deep into the seat with lower back and hips firmly pressed against backrest.',
      'Place feet shoulder-width apart in middle of platform, toes angled slightly out.'
    ],
    execution: [
      'Release safety handles. Lower sled smoothly until knees form roughly a 90° angle.',
      'Ensure lower back does NOT round or lift off the seat pad.',
      'Press platform away by driving through your heels and mid-foot; do NOT hyper-lock knees.'
    ],
    mistakes: [
      'Allowing knees to cave inward (keep knees tracking in line with second toes).',
      'Violently snapping knees into hyper-extension lockout at the top.',
      'Lowering so deep that pelvis curls off the back pad (causes lumbar disc herniation risk).'
    ],
    breathing: 'Inhale on the controlled descent; exhale powerfully as you press sled away.'
  },
  'ex_db_rdl': {
    videoId: '_oyxCn2iSjU',
    setup: [
      'Stand tall holding dumbbells in front of thighs with palms facing you.',
      'Feet hip-width apart, soft slight bend in knees that stays fixed throughout.'
    ],
    execution: [
      'Push your hips straight back toward the wall as if closing a car door with your butt.',
      'Slide dumbbells down along thighs and shins, keeping them glued close to legs.',
      'Stop when you feel full hamstring stretch (usually just below knees). Drive hips forward to stand.'
    ],
    mistakes: [
      'Rounding the lower back (spine must remain completely flat and rigid).',
      'Squatting down by bending knees excessively (turns it into a squat instead of a hinge).',
      'Holding dumbbells far out in front of your body.'
    ],
    breathing: 'Inhale and brace core as hips push back; exhale as hips drive through to lockout.'
  },
  'ex_walking_lunge': {
    videoId: 'D7KaRcUTQeE',
    setup: [
      'Stand tall holding dumbbells at your sides or with bodyweight.',
      'Clear a walking lane of 10–12 paces.'
    ],
    execution: [
      'Take a controlled stride forward. Lower hips until both knees are bent at roughly 90° angles.',
      'Back knee gently kisses or hovers 1 inch above the floor.',
      'Push through front heel to step forward into the next lunge step smoothly.'
    ],
    mistakes: [
      'Front knee caving inward or slamming back knee hard into the gym floor.',
      'Short, cramped steps that place excess shearing force on the front knee.'
    ],
    breathing: 'Inhale as you step and drop down; exhale as you drive up into next stride.'
  },
  'ex_seated_leg_curl': {
    videoId: 'ELOCsoDSmrg',
    setup: [
      'Adjust backrest so knees align with machine pivot axis.',
      'Set lower pad just below calves/Achilles tendon, and lock top thigh pad down firmly.'
    ],
    execution: [
      'Grab handles tightly to anchor hips. Curl heels back under seat as far as possible.',
      'Hold the peak contraction for 1 second.',
      'Resist the weight on the way up with a slow 3-second negative.'
    ],
    mistakes: [
      'Allowing hips to rise up off the seat (keep thigh pad locked tight).',
      'Letting weight stack slam down without controlling the eccentric return.'
    ],
    breathing: 'Exhale as you curl heels inward; inhale as you extend legs back out.'
  },
  'ex_standing_calf_raise': {
    videoId: '-M4-G8p8fMc',
    setup: [
      'Balls of feet on edge of step or machine block, heels hanging off.',
      'Legs straight with knees soft (not hyperextended).'
    ],
    execution: [
      'Drop heels down into a deep 2-second stretch at the bottom.',
      'Push powerfully through big toes to rise as high as possible.',
      'Pause at the peak for a full 1-second squeeze.'
    ],
    mistakes: [
      'Bouncing fast using Achilles tendon elasticity rather than calf muscle contraction.',
      'Bending knees to cheat with quad drive.'
    ],
    breathing: 'Exhale as you push onto toes; inhale as you lower into full stretch.'
  },
  'ex_front_plank': {
    videoId: 'ASdvN_XEl_c',
    setup: [
      'Forearms on mat, elbows directly under shoulders, forearms parallel.',
      'Feet hip-width apart on toes.'
    ],
    execution: [
      'Create a rigid straight line from head to heels.',
      'Squeeze glutes hard and brace abdominal wall as if preparing to take a punch.',
      'Hold tension steadily without holding your breath.'
    ],
    mistakes: [
      'Sagging hips (hyperextends lumbar spine and causes lower back ache).',
      'Piking hips high up into the air.'
    ],
    breathing: 'Take steady, shallow, rhythmic breaths into your belly while maintaining ab tension.'
  },
  'ex_incline_db_bench': {
    videoId: '8iPEnn-ltC8',
    setup: [
      'Set adjustable bench to 30° incline (avoid 45°+ which shifts load to front delts).',
      'Kick dumbbells to shoulder height and lie back with feet flat on the ground.'
    ],
    execution: [
      'Keep shoulder blades pinched back into bench pad.',
      'Lower dumbbells under control until you feel deep stretch across upper clavicular pecs.',
      'Press up and slightly inward over clavicles without banging weights together.'
    ],
    mistakes: [
      'Setting bench too steep (turns it into a shoulder press rather than upper chest builder).',
      'Bouncing or losing tightness at the bottom.'
    ],
    breathing: 'Inhale deeply on the way down; exhale as you press dumbbells upward.'
  },
  'ex_seated_cable_row': {
    videoId: 'GZbfZ033f74',
    setup: [
      'Sit on cable row bench with feet on footplates, knees slightly bent.',
      'Grab V-grip handle, sit tall with chest lifted and slight arch in lower back.'
    ],
    execution: [
      'Pull handle into lower abdomen/belly button, driving elbows backward.',
      'Pinch shoulder blades together hard for 1 second at the finish.',
      'Extend arms with control to feel full stretch in mid-back, avoiding excessive forward hunching.'
    ],
    mistakes: [
      'Rocking back and forth using momentum like a rowing boat.',
      'Pulling high to neck or chest instead of toward belly button.'
    ],
    breathing: 'Exhale as you pull handle to stomach; inhale as you return weight forward.'
  },
  'ex_assisted_pullup': {
    videoId: 'uL_zIeHqGcg',
    setup: [
      'Set pin on weight stack (higher weight = more assistance).',
      'Place knees on pad, grip handles with neutral grip (palms facing each other).'
    ],
    execution: [
      'Start from a dead hang with arms fully extended.',
      'Drive elbows down toward ribs to lift your body until chin clears hands.',
      'Lower under 3-second control back to full dead hang.'
    ],
    mistakes: [
      'Doing half reps and not letting arms fully extend at bottom.',
      'Kicking legs or swinging on the pad.'
    ],
    breathing: 'Exhale as you pull your body up; inhale as you lower back down.'
  },
  'ex_db_lateral_raise': {
    videoId: '3VcKaXpzqRo',
    setup: [
      'Stand with feet hip-width, holding relatively light dumbbells at sides.',
      'Hinge forward 5–10° at hips and keep elbows slightly bent.'
    ],
    execution: [
      'Raise arms out to sides in the scapular plane (slightly in front of body).',
      'Lead with elbows, raising until upper arms are parallel to floor.',
      'Lower dumbbells slowly under complete control.'
    ],
    mistakes: [
      'Using heavy weights and swinging with hips/back momentum.',
      'Leading with hands higher than elbows (shifts tension away from side delts).'
    ],
    breathing: 'Exhale as arms raise to sides; inhale as you lower smoothly.'
  },
  'ex_face_pull': {
    videoId: 'rep-qVOkqgk',
    setup: [
      'Set cable pulley at eye level with rope attachment.',
      'Grip rope with thumbs pointing backward toward you.'
    ],
    execution: [
      'Step back for tension. Pull center of rope directly toward bridge of nose.',
      'Separate rope ends, rotating hands backward to finish with thumbs pointing behind you.',
      'Squeeze rear deltoids and rhomboids for 1 second.'
    ],
    mistakes: [
      'Pulling down to chest instead of up to eye level.',
      'Using too much weight and leaning backward to cheat.'
    ],
    breathing: 'Exhale as you pull to face; inhale as arms return forward.'
  },
  'ex_overhead_triceps_ext': {
    videoId: '_gsUokN_Abg',
    setup: [
      'Attach rope to high or mid-pulley, turn around facing away from cable stack.',
      'Stagger feet in split stance, hinge forward 45° with rope behind head.'
    ],
    execution: [
      'Keep elbows pinned in place by temples.',
      'Extend forearms forward and flare rope ends apart at full triceps lockout.',
      'Bend elbows back under control to feel deep stretch in long head of triceps.'
    ],
    mistakes: [
      'Moving upper arms and elbows back and forth (elbows must stay fixed).',
      'Arching lower back under the cable load.'
    ],
    breathing: 'Exhale as you extend arms forward; inhale as you bend elbows behind head.'
  },
  'ex_hammer_curl': {
    videoId: 'zC3nLlEvin4',
    setup: [
      'Stand tall holding dumbbells with palms facing each other (neutral grip).',
      'Keep shoulders pinned back.'
    ],
    execution: [
      'Curl dumbbells upward while keeping palms facing each other the entire time.',
      'Squeeze at top when dumbbells reach upper chest height.',
      'Lower under control to full lockout.'
    ],
    mistakes: [
      'Swinging body or shrugging shoulders up.',
      'Rotating wrists (maintain neutral hammer grip throughout).'
    ],
    breathing: 'Exhale as you curl up; inhale as you lower the weights.'
  },
  'ex_goblet_squat': {
    videoId: 'MeIiIdtwXT4',
    setup: [
      'Hold a dumbbell or kettlebell vertically against your chest cupped under palms.',
      'Feet shoulder-width apart, toes turned out 15–20°.'
    ],
    execution: [
      'Sit back and down between knees, keeping chest lifted and elbows inside knees.',
      'Squat until thighs are at least parallel to floor.',
      'Drive feet into floor to stand tall, squeezing glutes at top.'
    ],
    mistakes: [
      'Collapsing chest forward or letting dumbbell drift away from torso.',
      'Knees collapsing inward on the way up.'
    ],
    breathing: 'Inhale and brace core on way down; exhale as you stand up.'
  },
  'ex_hip_thrust': {
    videoId: 'LM8XHLYJoYs',
    setup: [
      'Sit on floor with upper back against bench pad right across shoulder blades.',
      'Roll barbell over hips (use bar pad) or set up in hip thrust machine.',
      'Feet flat on floor, shins vertical at top of movement.'
    ],
    execution: [
      'Tuck chin to chest. Drive through heels to extend hips toward ceiling.',
      'Finish with thighs and torso parallel to floor; squeeze glutes hard for 1s.',
      'Lower hips down under control.'
    ],
    mistakes: [
      'Looking up at ceiling and hyperextending lower back (keep chin tucked to chest!).',
      'Placing feet too far forward (hits hamstrings) or too close (hits quads).'
    ],
    breathing: 'Inhale at bottom; exhale forcefully as hips thrust upward.'
  },
  'ex_bulgarian_split_squat': {
    videoId: '2C-uNgKwPLE',
    setup: [
      'Stand 2 feet in front of a flat bench. Place top of back foot on bench surface.',
      'Hold dumbbells at sides with chest upright.'
    ],
    execution: [
      'Lower hips down and slightly back until front thigh is parallel to floor.',
      'Front knee should stay stacked over mid-foot/ankle.',
      'Drive through front heel to return to top.'
    ],
    mistakes: [
      'Pushing through the back leg instead of using the front working leg.',
      'Leaning excessively forward.'
    ],
    breathing: 'Inhale as you drop down; exhale as you drive back up.'
  },
  'ex_leg_extension': {
    videoId: 'YyvSfVADmqw',
    setup: [
      'Adjust back pad so back of knees sit flush against edge of seat.',
      'Set shin pad just above ankles.'
    ],
    execution: [
      'Extend legs to full lockout, squeezing quadriceps firmly at peak for 1 second.',
      'Lower weight stack slowly over 2–3 seconds. Do not let weights slam.'
    ],
    mistakes: [
      'Swinging weight violently with momentum.',
      'Lifting butt off the seat.'
    ],
    breathing: 'Exhale as you extend legs; inhale as you lower the weight.'
  },
  'ex_seated_leg_curl_b': {
    videoId: 'ELOCsoDSmrg',
    setup: [
      'Align knee joints with pivot point of machine.',
      'Lock thigh pad down snugly over upper legs.'
    ],
    execution: [
      'Pull heels back as far as possible.',
      'Pause 1s at contraction, control the 3s negative return.'
    ],
    mistakes: ['Allowing pelvis to lift off seat.'],
    breathing: 'Exhale on the curl; inhale on the return.'
  },
  'ex_seated_calf_raise': {
    videoId: 'JbyjNymZOt0',
    setup: [
      'Sit at machine with balls of feet on platform, lower thigh pad snug over knees.'
    ],
    execution: [
      'Drop heels into deep stretch for 2 seconds.',
      'Push up onto toes as high as possible and squeeze soleus muscle.'
    ],
    mistakes: ['Bouncing fast without pauses.'],
    breathing: 'Exhale as you rise onto toes; inhale into stretch.'
  },
  'ex_reverse_crunch': {
    videoId: '7r3t_oV9G7Q',
    setup: [
      'Lie flat on floor with hands holding onto something stable behind head.',
      'Bend knees at 90°.'
    ],
    execution: [
      'Curl knees toward chest, lifting hips and tailbone 2–3 inches off mat.',
      'Squeeze lower abs at top.',
      'Lower hips slowly back to floor with strict ab control.'
    ],
    mistakes: ['Using swinging leg momentum rather than curling with lower abs.'],
    breathing: 'Exhale as hips lift; inhale as you lower tailbone.'
  },
  'ex_dead_bug': {
    videoId: 'g_BYB0R-4Ws',
    setup: [
      'Lie on back with arms extended straight up and knees bent at 90° over hips.'
    ],
    execution: [
      'Press lower back flat into the ground.',
      'Slowly extend opposite arm and opposite leg away from each other toward floor.',
      'Return to center and switch to opposite side. 10 reps per side.'
    ],
    mistakes: ['Allowing lower back to arch off the floor as leg lowers.'],
    breathing: 'Inhale as arm/leg lower; exhale as they return to center.'
  },
  'ex_side_plank': {
    videoId: 'K2VljzCC16g',
    setup: [
      'Lie on your side with elbow directly beneath shoulder, legs stacked.'
    ],
    execution: [
      'Lift hips off floor until body forms a straight line from neck to feet.',
      'Hold position with high tension, keeping hips pushed forward.'
    ],
    mistakes: ['Hips sagging toward floor or rotating torso forward.'],
    breathing: 'Steady rhythmic diaphragmatic breaths.'
  },
  'ex_pallof_press': {
    videoId: '5_8qpnRhL_U',
    setup: [
      'Stand perpendicular to cable pulley set at chest height.',
      'Hold handle with both hands at center of chest with athletic stance.'
    ],
    execution: [
      'Press handle straight out in front of you, fighting the cable’s rotational pull.',
      'Hold arms extended for 2 seconds, then return hands to chest.',
      'Perform 12 reps, then turn around and repeat for other side.'
    ],
    mistakes: ['Allowing torso or hips to twist toward the cable stack.'],
    breathing: 'Exhale as arms press out; inhale as hands return to chest.'
  },
  'ex_bird_dog': {
    videoId: 'wiFNA3sqjCA',
    setup: [
      'On hands and knees with wrists under shoulders and knees under hips.'
    ],
    execution: [
      'Reach opposite arm and opposite leg straight out until parallel to ground.',
      'Hold 2 seconds, keeping hips level. 10 reps per side.'
    ],
    mistakes: ['Arching lower back or tilting hips to one side.'],
    breathing: 'Inhale in center; exhale as limbs extend.'
  },
  'ex_side_plank_sat': {
    videoId: 'K2VljzCC16g',
    setup: ['Elbow under shoulder, feet stacked or staggered.'],
    execution: ['Hold straight rigid diagonal line for 25–40s per side.'],
    mistakes: ['Sagging hips.'],
    breathing: 'Rhythmic belly breathing.'
  },
  'ex_cable_wood_chop': {
    videoId: 'pAplQXk3dkU',
    setup: [
      'Attach handle to high cable pulley. Stand sideways with wide athletic stance.'
    ],
    execution: [
      'Grab handle with both hands and rotate torso diagonally down across body toward opposite knee.',
      'Pivot on back foot, driving motion through core obliques.',
      'Control the return back to top. 12 reps per side.'
    ],
    mistakes: ['Pulling solely with arms instead of rotating through core and hips.'],
    breathing: 'Exhale on the downward chop; inhale on the controlled return.'
  }
};

const MUSCLE_METADATA = {
  'chest': {
    name: 'Pectorals (Chest)',
    tag: 'Upper Torso',
    desc: 'Trained on Upper A & B (Flat DB Press, Incline DB Press).',
    fatLossFact: 'Spot reduction is a myth: chest fat ("manboobs") cannot be directly burned by bench press alone. Maintaining a 500–700 kcal deficit while progressively overloading dumbbells builds the upper pec muscle shelf, tightening and flattening the chest as whole-body fat reduces.'
  },
  'lats': {
    name: 'Latissimus Dorsi (Back Width)',
    tag: 'Upper Back',
    desc: 'Trained on Upper A & B (Lat Pulldown, Cable Rows, Assisted Pull-Up).',
    fatLossFact: 'Wider lats create an athletic V-taper frame that visually narrows the appearance of your waist and side fat.'
  },
  'front-shoulders': {
    name: 'Front & Side Deltoids',
    tag: 'Shoulders',
    desc: 'Trained on Upper A & B (Seated DB Press, Lateral Raises).',
    fatLossFact: 'Round, capped shoulders broaden your upper silhouette, balancing your chest and hip proportions.'
  },
  'rear-shoulders': {
    name: 'Rear Delts & Upper Back',
    tag: 'Upper Back',
    desc: 'Trained on Upper B (Face Pulls, Rows).',
    fatLossFact: 'Pulls rounded shoulders backward, instantly improving posture and lifting the chest.'
  },
  'triceps': {
    name: 'Triceps',
    tag: 'Arms',
    desc: 'Trained on Upper A & B (Pressdown, Overhead Cable Extension).',
    fatLossFact: 'Comprises 60% of upper arm size. Tightens arm fat as body fat drops.'
  },
  'biceps': {
    name: 'Biceps & Forearms',
    tag: 'Arms',
    desc: 'Trained on Upper A (DB Curl) & Upper B (Hammer Curl).',
    fatLossFact: 'Strengthens elbow flexors and builds solid arm definition.'
  },
  'quadriceps': {
    name: 'Quadriceps (Front Thighs)',
    tag: 'Lower Body',
    desc: 'Trained on Lower A & B (Leg Press, Goblet/Hack Squat, Lunges, Leg Extension).',
    fatLossFact: 'Heavy quad movements burn enormous calories during and after training, accelerating total body fat loss from thick thighs.'
  },
  'hamstrings': {
    name: 'Hamstrings (Posterior Thighs)',
    tag: 'Lower Body',
    desc: 'Trained on Lower A & B (Dumbbell RDL, Leg Curls, Hip Thrust).',
    fatLossFact: 'Balances quad dominance, reshaping the back of the legs.'
  },
  'glutes': {
    name: 'Glutes (Hips & Butt)',
    tag: 'Lower Body',
    desc: 'Trained on Lower A & B (Hip Thrust, Squats, Lunges).',
    fatLossFact: 'The largest metabolic engine in the body. Reshapes the pelvis and burns stored fat.'
  },
  'calves': {
    name: 'Calves (Soleus & Gastrocnemius)',
    tag: 'Lower Body',
    desc: 'Trained on Lower A (Standing) and Lower B (Seated).',
    fatLossFact: 'Trained through full ankle range of motion.'
  },
  'abs': {
    name: 'Rectus Abdominis (Core)',
    tag: 'Core',
    desc: 'Trained on Lower days and Cardio+Core days (Plank, Dead Bug, Reverse Crunch).',
    fatLossFact: 'Abs are uncovered through a calorie deficit. Static bracing protects the spine and pulls in abdominal protrusion.'
  },
  'obliques': {
    name: 'Obliques (Side Core)',
    tag: 'Waist',
    desc: 'Trained on Wed & Sat (Side Plank, Pallof Press, Cable Wood Chop).',
    fatLossFact: 'Avoid weighted side crunches (they widen the waist). Anti-rotation Pallof presses tighten the waistline safely.'
  }
};

// ----------------------------------------------------
// 3. STATE MANAGEMENT & LOCAL STORAGE
// ----------------------------------------------------
const STORAGE_KEYS = {
  LOGS: 'pumpd_workout_logs_v2',
  WEIGH_INS: 'pumpd_weigh_ins_v2',
  WAIST: 'pumpd_waist_logs_v2',
  PROTEIN: 'pumpd_protein_logs_v2',
  WATER: 'pumpd_water_logs_v2',
  SLEEP: 'pumpd_sleep_logs_v2',
  SETTINGS: 'pumpd_settings_v2',
  TODAY_CHECKLIST: 'pumpd_today_checklist_v2',
  MY_GOALS: 'pumpd_my_goals_v2',
  ACTIVE_DRAFT: 'pumpd_active_session_draft_v2',
  LAST_TAB: 'pumpd_last_active_tab_v2',
  REST_TARGET: 'pumpd_rest_timer_target_v2'
};

// ----------------------------------------------------
// 3. EXERCISE DEMONSTRATION IMAGE REGISTRY
// ----------------------------------------------------
const EXERCISE_IMAGES = {
  'ex_db_flat_bench': ['Dumbbell_Bench_Press/0.jpg', 'Dumbbell_Bench_Press/1.jpg'],
  'ex_lat_pulldown': ['Wide-Grip_Lat_Pulldown/0.jpg', 'Wide-Grip_Lat_Pulldown/1.jpg'],
  'ex_seated_db_press': ['Seated_Dumbbell_Press/0.jpg', 'Seated_Dumbbell_Press/1.jpg'],
  'ex_chest_supp_row': ['Seated_Cable_Rows/0.jpg', 'Seated_Cable_Rows/1.jpg'],
  'ex_cable_triceps_pressdown': ['Triceps_Pushdown/0.jpg', 'Triceps_Pushdown/1.jpg'],
  'ex_db_biceps_curl': ['Dumbbell_Bicep_Curl/0.jpg', 'Dumbbell_Bicep_Curl/1.jpg'],
  'ex_leg_press': ['Leg_Press/0.jpg', 'Leg_Press/1.jpg'],
  'ex_db_rdl': ['Romanian_Deadlift/0.jpg', 'Romanian_Deadlift/1.jpg'],
  'ex_walking_lunge': ['Bodyweight_Walking_Lunge/0.jpg', 'Bodyweight_Walking_Lunge/1.jpg'],
  'ex_seated_leg_curl': ['Seated_Leg_Curl/0.jpg', 'Seated_Leg_Curl/1.jpg'],
  'ex_standing_calf_raise': ['Standing_Calf_Raises/0.jpg', 'Standing_Calf_Raises/1.jpg'],
  'ex_front_plank': ['Plank/0.jpg', 'Plank/1.jpg'],
  'ex_dead_bug': ['Dead_Bug/0.jpg', 'Dead_Bug/1.jpg'],
  'ex_side_plank': ['Push_Up_to_Side_Plank/0.jpg', 'Push_Up_to_Side_Plank/1.jpg'],
  'ex_pallof_press': ['Pallof_Press/0.jpg', 'Pallof_Press/1.jpg'],
  'ex_incline_db_bench': ['Incline_Dumbbell_Press/0.jpg', 'Incline_Dumbbell_Press/1.jpg'],
  'ex_seated_cable_row': ['Seated_Cable_Rows/0.jpg', 'Seated_Cable_Rows/1.jpg'],
  'ex_assisted_pullup': ['Close-Grip_Front_Lat_Pulldown/0.jpg', 'Close-Grip_Front_Lat_Pulldown/1.jpg'],
  'ex_db_lateral_raise': ['Side_Lateral_Raise/0.jpg', 'Side_Lateral_Raise/1.jpg'],
  'ex_face_pull': ['Face_Pull/0.jpg', 'Face_Pull/1.jpg'],
  'ex_overhead_triceps_ext': ['Cable_Rope_Overhead_Triceps_Extension/0.jpg', 'Cable_Rope_Overhead_Triceps_Extension/1.jpg'],
  'ex_hammer_curl': ['Hammer_Curls/0.jpg', 'Hammer_Curls/1.jpg'],
  'ex_goblet_squat': ['Goblet_Squat/0.jpg', 'Goblet_Squat/1.jpg'],
  'ex_hip_thrust': ['Barbell_Hip_Thrust/0.jpg', 'Barbell_Hip_Thrust/1.jpg'],
  'ex_bulgarian_split_squat': ['Split_Squat_with_Dumbbells/0.jpg', 'Split_Squat_with_Dumbbells/1.jpg'],
  'ex_leg_extension': ['Leg_Extensions/0.jpg', 'Leg_Extensions/1.jpg'],
  'ex_seated_leg_curl_b': ['Seated_Leg_Curl/0.jpg', 'Seated_Leg_Curl/1.jpg'],
  'ex_seated_calf_raise': ['Barbell_Seated_Calf_Raise/0.jpg', 'Barbell_Seated_Calf_Raise/1.jpg'],
  'ex_reverse_crunch': ['Reverse_Crunch/0.jpg', 'Reverse_Crunch/1.jpg'],
  'ex_bird_dog': ['Dead_Bug/0.jpg', 'Dead_Bug/1.jpg'],
  'ex_side_plank_sat': ['Push_Up_to_Side_Plank/0.jpg', 'Push_Up_to_Side_Plank/1.jpg'],
  'ex_cable_wood_chop': ['Standing_Cable_Wood_Chop/0.jpg', 'Standing_Cable_Wood_Chop/1.jpg']
};

function getExerciseThumbnailUrl(exerciseId) {
  const paths = EXERCISE_IMAGES[exerciseId];
  if (paths && paths.length > 0) {
    return `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${paths[0]}`;
  }
  return 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg';
}

// ----------------------------------------------------
// 4. APPLICATION STATE & PERSISTENCE
// ----------------------------------------------------
const AppState = {
  activeNav: 'dashboard',
  currentDayId: getTodayDayId(),
  programDayId: getTodayDayId(),
  isWeek7Deload: false,
  timerInterval: null,
  timerRemaining: 0,
  timerTotal: 0,
  timerContext: 'Rest between sets',
  warmupInterval: null,
  warmupRemaining: 480,
  warmupRunning: false,
  cardioInterval: null,
  cardioRemaining: 720,
  cardioRunning: false,
  audioCtx: null,
  waterLogged: 2.25
};

function getTodayDayId() {
  const dayIndex = new Date().getDay();
  const map = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return map[dayIndex] || 'mon';
}

function loadStorage(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

// ----------------------------------------------------
// 5. AUDIO & HAPTIC VIBRATION
// ----------------------------------------------------
function getAudio() {
  if (!AppState.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) AppState.audioCtx = new AudioContext();
  }
  if (AppState.audioCtx && AppState.audioCtx.state === 'suspended') {
    AppState.audioCtx.resume();
  }
  return AppState.audioCtx;
}

function playDing() {
  try {
    const ctx = getAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.7);
  } catch (e) {}
}

function playTick() {
  try {
    const ctx = getAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  } catch (e) {}
}

function triggerHaptic(type = 'tap') {
  if ('vibrate' in navigator) {
    if (type === 'rest') navigator.vibrate([250, 100, 250]);
    else if (type === 'success') navigator.vibrate([150, 50, 150, 50, 250]);
    else navigator.vibrate(60);
  }
}

// ----------------------------------------------------
// 6. REST STOPWATCH & COUNTDOWN (Square Floating Widget)
// ----------------------------------------------------
function startRestTimer(seconds, contextLabel = 'Rest between sets', initialTotal) {
  cancelRestTimer(false);
  AppState.timerTotal = initialTotal || seconds;
  AppState.timerRemaining = seconds;
  AppState.timerContext = contextLabel;
  updateRestWidgetUI();

  // Persist target timestamp so timer survives locking phone, switching apps, or tab reloads
  saveStorage(STORAGE_KEYS.REST_TARGET, {
    target: Date.now() + (seconds * 1000),
    total: AppState.timerTotal,
    context: contextLabel
  });

  const widget = document.getElementById('floating-rest-widget');
  if (widget) widget.classList.remove('hidden');

  triggerHaptic('tap');
  getAudio();

  AppState.timerInterval = setInterval(() => {
    AppState.timerRemaining--;
    updateRestWidgetUI();

    if (AppState.timerRemaining <= 3 && AppState.timerRemaining > 0) {
      playTick();
      if ('vibrate' in navigator) navigator.vibrate(40);
    }

    if (AppState.timerRemaining <= 0) {
      cancelRestTimer(true);
      playDing();
      triggerHaptic('rest');
      showToast(`⏰ Rest complete: ${AppState.timerContext}! Ready for next set.`, 'success');
    }
  }, 1000);
}

function cancelRestTimer(clearStorage = true) {
  if (AppState.timerInterval) {
    clearInterval(AppState.timerInterval);
    AppState.timerInterval = null;
  }
  if (clearStorage) {
    saveStorage(STORAGE_KEYS.REST_TARGET, null);
  }
  const widget = document.getElementById('floating-rest-widget');
  if (widget) widget.classList.add('hidden');
}

function restoreRestTimerIfActive() {
  const saved = loadStorage(STORAGE_KEYS.REST_TARGET, null);
  if (!saved || !saved.target) return;
  const remaining = Math.round((saved.target - Date.now()) / 1000);
  if (remaining > 0) {
    startRestTimer(remaining, saved.context, saved.total);
  } else {
    saveStorage(STORAGE_KEYS.REST_TARGET, null);
  }
}

function adjustRestTimer(sec) {
  AppState.timerRemaining = Math.max(0, AppState.timerRemaining + sec);
  AppState.timerTotal = Math.max(AppState.timerTotal, AppState.timerRemaining);
  updateRestWidgetUI();
  triggerHaptic('tap');
}

function startCustomRest(sec, label) {
  startRestTimer(sec, label || `${sec}s Rest`);
  showToast(`Started ${sec}s rest countdown`);
}

function updateRestWidgetUI() {
  const display = document.getElementById('floating-rest-display');
  const contextEl = document.getElementById('floating-rest-context');
  const bar = document.getElementById('floating-rest-bar');

  if (contextEl) {
    contextEl.innerText = AppState.timerContext || 'Rest between sets';
  }

  if (display) {
    const m = Math.floor(AppState.timerRemaining / 60);
    const s = AppState.timerRemaining % 60;
    display.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  if (bar && AppState.timerTotal > 0) {
    const pct = Math.max(0, Math.min(100, (AppState.timerRemaining / AppState.timerTotal) * 100));
    bar.style.width = `${pct}%`;
  }
}

// ----------------------------------------------------
// 7. DOUBLE PROGRESSION EVALUATOR
// ----------------------------------------------------
function checkDoubleProgression(exerciseId, workingSets) {
  const day = WORKOUT_DAYS.find(d => d.exercises.some(e => e.id === exerciseId));
  if (!day) return null;
  const ex = day.exercises.find(e => e.id === exerciseId);
  if (!ex || !workingSets || workingSets.length === 0) return null;

  const validSets = workingSets.filter(s => s.completed && Number(s.reps) > 0);
  const targetCount = AppState.isWeek7Deload ? Math.max(1, ex.sets - 1) : ex.sets;

  if (validSets.length >= targetCount && validSets.every(s => Number(s.reps) >= ex.maxReps)) {
    const inc = (ex.primaryMuscle === 'quadriceps' || ex.primaryMuscle === 'hamstrings' || ex.primaryMuscle === 'glutes') ? '+2.5–5 kg' : '+1–2.5 kg';
    return {
      type: 'PROGRESSED',
      msg: `🎯 Milestone Achieved! Hit ${ex.maxReps} reps on all sets. Add ${inc} next session and reset to ${ex.minReps} reps.`
    };
  }

  if (validSets.length >= targetCount && !validSets.every(s => Number(s.reps) >= ex.minReps)) {
    return {
      type: 'BELOW',
      msg: `⚠️ Under ${ex.minReps} reps. If this happens twice in a row, reduce weight by 5–10% to rebuild clean form.`
    };
  }

  return null;
}

// ----------------------------------------------------
// 8. TOAST NOTIFICATIONS (Square)
// ----------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600' : type === 'warning' ? 'bg-amber-600' : 'bg-[#1D222E] border border-white/10';
  toast.className = `${bg} text-white px-3.5 py-2.5 rounded shadow-lg flex items-center justify-between text-xs transition-all duration-200 transform translate-y-2 opacity-0 max-w-xs w-full pointer-events-auto font-medium`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="ml-2 text-white/70 hover:text-white text-base leading-none">&times;</button>
  `;

  toast.querySelector('button').onclick = () => toast.remove();
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.remove('translate-y-2', 'opacity-0'));
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// ----------------------------------------------------
// 9. NAVIGATION CONTROLLER (All Square Buttons)
// ----------------------------------------------------
function switchNavTab(tabName) {
  if (AppState.activeNav === 'tracker' && tabName !== 'tracker') {
    autoSaveWorkoutSession();
  }
  AppState.activeNav = tabName;
  saveStorage(STORAGE_KEYS.LAST_TAB, tabName);

  const views = {
    dashboard: document.getElementById('view-dashboard'),
    workouts: document.getElementById('view-workouts'),
    tracker: document.getElementById('view-tracker'),
    progress: document.getElementById('view-progress'),
    library: document.getElementById('view-library')
  };

  Object.keys(views).forEach(key => {
    if (views[key]) {
      if (key === tabName) views[key].classList.remove('hidden');
      else views[key].classList.add('hidden');
    }
  });

  // Desktop sidebar buttons
  const deskNavs = ['dashboard', 'workouts', 'tracker', 'progress', 'library'];
  deskNavs.forEach(id => {
    const btn = document.getElementById(`desk-nav-${id}`);
    if (btn) {
      if (id === tabName) {
        btn.className = 'w-full flex items-center gap-3 px-3 py-2.5 rounded text-[#E5A93C] bg-[#E5A93C]/10 border border-[#E5A93C]/20 transition-all text-left';
      } else {
        btn.className = 'w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-400 hover:text-white hover:bg-white/[0.03] border border-transparent transition-all text-left';
      }
    }
  });

  // Mobile bottom bar buttons
  const mobNavs = ['dashboard', 'workouts', 'tracker', 'progress', 'library'];
  mobNavs.forEach(id => {
    const btn = document.getElementById(`mob-nav-${id}`);
    if (btn) {
      if (id === tabName) {
        btn.className = 'flex flex-col items-center justify-center p-1.5 rounded text-[#E5A93C] bg-[#E5A93C]/10 transition-colors';
      } else {
        btn.className = 'flex flex-col items-center justify-center p-1.5 rounded text-gray-400 hover:text-white transition-colors';
      }
    }
  });

  triggerHaptic('tap');

  if (tabName === 'dashboard') renderDashboardView();
  else if (tabName === 'workouts') renderWorkoutsView();
  else if (tabName === 'tracker') renderTrackerView();
  else if (tabName === 'progress') renderProgressView();
  else if (tabName === 'library') renderLibraryView('all');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ----------------------------------------------------
// 10. RENDER: VIEW 1 — DASHBOARD (Matches ui_inspiration.jpg)
// ----------------------------------------------------
function renderDashboardView() {
  const hr = new Date().getHours();
  const greetingEl = document.getElementById('hero-greeting');
  if (greetingEl) {
    greetingEl.innerText = hr < 12 ? 'Good Morning,' : hr < 17 ? 'Good Afternoon,' : 'Good Evening,';
  }

  // Date Badges (Header & Tracker)
  const todayDateFormatted = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  const headerDate = document.getElementById('header-date-display');
  if (headerDate) headerDate.innerText = todayDateFormatted;
  const trackerDate = document.getElementById('tracker-session-date');
  if (trackerDate) trackerDate.innerText = todayDateFormatted;

  // Grounded Stat Calculations: 94.5 -> 85.0 kg
  const avg = calculateRollingAvg();
  const startWeight = 94.5;
  const targetWeight = 85.0;
  const totalLost = (startWeight - avg).toFixed(1);
  const remaining = Math.max(0, (avg - targetWeight)).toFixed(1);

  // Weight Rolling Avg Display
  const weightVal = document.getElementById('stat-weight-val');
  if (weightVal) weightVal.innerText = `${avg} kg`;

  // Total Lost & Remaining
  const totalLostVal = document.getElementById('stat-total-lost-val');
  if (totalLostVal) totalLostVal.innerText = `${totalLost > 0 ? `-${totalLost}` : totalLost} kg`;

  const remainingVal = document.getElementById('stat-remaining-val');
  if (remainingVal) remainingVal.innerText = `${remaining} kg to go`;

  // Populate Today's Workout Card
  const todayDay = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  const title = document.getElementById('dash-workout-title');
  const subtitle = document.getElementById('dash-workout-subtitle');
  const listContainer = document.getElementById('dash-exercise-list');

  // Active Workout In-Progress Recovery Check
  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const activeLog = logs.find(l => l.date === todayStr && l.inProgress && l.exercises?.some(e => e.sets?.some(s => s.completed || (s.weight !== '' && s.weight !== undefined) || (s.reps !== '' && s.reps !== undefined))));
  const bannerContainer = document.getElementById('active-session-banner-container');
  const startBtn = document.getElementById('dash-start-workout-btn');

  if (activeLog && bannerContainer) {
    const totalSets = activeLog.totalSets || activeLog.exercises.reduce((acc, e) => acc + (e.sets?.length || 0), 0);
    const completedSets = activeLog.completedSets || activeLog.exercises.reduce((acc, e) => acc + (e.sets?.filter(s => s.completed)?.length || 0), 0);
    const workoutDay = WORKOUT_DAYS.find(d => d.id === activeLog.dayId) || todayDay;

    bannerContainer.innerHTML = `
      <div class="dashboard-card p-4 border-2 border-amber-500/60 bg-amber-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl mb-4">
        <div class="flex items-center gap-3">
          <span class="w-3 h-3 rounded-sm bg-amber-400 animate-pulse flex-shrink-0"></span>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-black text-amber-400 uppercase tracking-wider">⚡ WORKOUT IN PROGRESS</span>
              <span class="text-[10px] text-gray-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-white/10">${completedSets} / ${totalSets} sets logged</span>
            </div>
            <h3 class="text-sm font-bold text-white mt-1">${workoutDay.name}: ${workoutDay.title}</h3>
            <p class="text-[11px] text-gray-300 mt-0.5">Session left off mid-workout. Tap Resume to continue tracking right where you left off.</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button onclick="resetActiveWorkoutSession()" class="px-3 py-2 rounded btn-dark text-xs text-gray-400 hover:text-white">Discard</button>
          <button onclick="resumeActiveWorkoutSession('${activeLog.dayId}')" class="px-5 py-2.5 rounded btn-gold text-xs font-extrabold shadow flex items-center gap-1.5">
            <span>Resume Workout ➔</span>
          </button>
        </div>
      </div>
    `;
    bannerContainer.classList.remove('hidden');

    if (startBtn) {
      startBtn.innerHTML = `
        <span>⚡ Resume In-Progress Workout (${completedSets}/${totalSets} Sets Done)</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      `;
      startBtn.onclick = () => resumeActiveWorkoutSession(activeLog.dayId);
    }
  } else {
    if (bannerContainer) {
      bannerContainer.innerHTML = '';
      bannerContainer.classList.add('hidden');
    }
    if (startBtn) {
      startBtn.innerHTML = `
        <span>Start 8:30 PM Workout & Track Sets</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      `;
      startBtn.onclick = () => startTodayWorkoutSession();
    }
  }

  if (title) title.innerText = `${todayDay.name}: ${todayDay.title}`;
  if (subtitle) subtitle.innerText = todayDay.subtitle;

  if (listContainer) {
    listContainer.innerHTML = '';
    if (todayDay.exercises.length === 0) {
      listContainer.innerHTML = `
        <div class="py-6 text-center text-gray-400 text-xs">
          <span class="text-2xl block mb-1">🌿</span>
          Rest & recovery day. Enjoy an active recovery walk and allow muscle fibers to rebuild.
        </div>
      `;
    } else {
      // Check storage for completed status
      const logs = loadStorage(STORAGE_KEYS.LOGS, []);
      const todayStr = new Date().toISOString().slice(0, 10);
      const existingLog = logs.find(l => l.date === todayStr && l.dayId === todayDay.id);

      todayDay.exercises.forEach((ex, idx) => {
        const isDone = existingLog?.exercises?.find(e => e.id === ex.id)?.sets?.some(s => s.completed) || false;
        const row = document.createElement('div');
        row.className = 'p-2.5 rounded bg-[#161B24] border border-white/[0.04] hover:border-white/[0.09] flex items-center justify-between gap-3 text-xs transition-colors';
        row.innerHTML = `
          <div class="flex items-center gap-3 min-w-0">
            <!-- Square Checkbox -->
            <span class="square-checkbox ${isDone ? 'checked' : ''}" onclick="toggleDashExerciseDone('${ex.id}', this)" title="Mark completed">
              <svg class="w-3 h-3 text-black ${isDone ? '' : 'hidden'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>

            <!-- Square Visual Motion Demo Thumbnail (Crossed with workout!) -->
            <div class="relative w-12 h-12 bg-[#0C0E12] border border-white/10 rounded flex-shrink-0 cursor-pointer overflow-hidden group shadow-inner" onclick="openExerciseDemo('${ex.id}')" title="Click to view form demo">
              <img src="${getExerciseThumbnailUrl(ex.id)}" alt="${ex.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div class="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                <span class="text-[9px] bg-black/60 px-1 py-0.2 rounded text-white font-mono">🎬</span>
              </div>
            </div>

            <!-- Exercise Name & Prescription -->
            <div class="min-w-0">
              <div class="font-bold text-white text-xs hover:text-[#E5A93C] cursor-pointer truncate" onclick="openExerciseDemo('${ex.id}')">
                ${ex.name}
              </div>
              <div class="text-[10.5px] text-gray-400 mt-0.5 flex items-center gap-1.5 flex-wrap">
                <span class="text-amber-400/90 font-mono font-semibold">${ex.sets} sets &times; ${ex.minReps}–${ex.maxReps}</span>
                <span class="text-gray-600">&bull;</span>
                <span class="uppercase text-[9.5px] px-1 py-0.2 rounded bg-white/[0.05] text-gray-300 font-mono">${ex.primaryMuscle}</span>
              </div>
            </div>
          </div>

          <!-- Square Action Button -->
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <button onclick="openExerciseDemo('${ex.id}')" class="px-2.5 py-1.5 rounded btn-dark text-[11px] font-bold flex items-center gap-1">
              <span>🎬 Form</span>
            </button>
          </div>
        `;
        listContainer.appendChild(row);
      });
    }
  }

  // Render Persistent Interactive Todo Lists
  renderTodayChecklist();
  renderMyGoals();
}

function toggleDashExerciseDone(exerciseId, el) {
  const todayDay = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  let log = logs.find(l => l.date === todayStr && l.dayId === todayDay.id);

  if (!log) {
    log = {
      date: todayStr,
      timestamp: new Date().toISOString(),
      dayId: todayDay.id,
      dayName: todayDay.name,
      exercises: []
    };
    logs.unshift(log);
  }

  let exLog = log.exercises.find(e => e.id === exerciseId);
  const exDef = todayDay.exercises.find(e => e.id === exerciseId);
  const setsCount = exDef ? (AppState.isWeek7Deload ? Math.max(1, exDef.sets - 1) : exDef.sets) : 3;

  if (!exLog) {
    exLog = {
      id: exerciseId,
      name: exDef?.name || exerciseId,
      sets: Array.from({ length: setsCount }, (_, i) => ({
        setNum: i + 1,
        weight: 0,
        reps: exDef?.minReps || 10,
        completed: true
      }))
    };
    log.exercises.push(exLog);
  } else {
    const isCurrentlyDone = exLog.sets.some(s => s.completed);
    exLog.sets.forEach(s => s.completed = !isCurrentlyDone);
  }

  saveStorage(STORAGE_KEYS.LOGS, logs);
  renderDashboardView();
  triggerHaptic('tap');
  showToast('Workout progress updated & saved!', 'success');
}

// ----------------------------------------------------
// 10B. TODAY'S CHECKLIST TODO ENGINE (Persistent)
// ----------------------------------------------------
const TODAY_CHECKLIST_ITEMS = [
  {
    id: 'chk_workout',
    title: '8:30 PM Workout Session',
    detail: 'Complete scheduled lifting session (or active recovery walk on rest days)'
  },
  {
    id: 'chk_warmup',
    title: '8-Min Stationary Bike Warm-up',
    detail: 'Moderate pace to elevate body temp & lubricate joints prior to lifting'
  },
  {
    id: 'chk_protein',
    title: 'Hit 140–170g Protein Target',
    detail: 'Adequate amino acid pool to preserve lean muscle tissue in deficit'
  },
  {
    id: 'chk_deficit',
    title: '500–700 kcal Calorie Deficit',
    detail: 'Strict adherence to maintain steady 0.5–0.8 kg/week fat reduction'
  },
  {
    id: 'chk_cardio',
    title: '12–15 Min Post-Lift Cardio',
    detail: 'Stationary bike or incline treadmill at conversational pace'
  },
  {
    id: 'chk_sleep',
    title: '7–9 Hours Quality Sleep',
    detail: 'Essential for hormonal recovery, fat loss, and CNS restoration'
  }
];

function getTodayChecklistState() {
  const store = loadStorage(STORAGE_KEYS.TODAY_CHECKLIST, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  return store[todayKey] || [];
}

function saveTodayChecklistState(checkedIds) {
  const store = loadStorage(STORAGE_KEYS.TODAY_CHECKLIST, {});
  const todayKey = new Date().toISOString().slice(0, 10);
  store[todayKey] = checkedIds;
  saveStorage(STORAGE_KEYS.TODAY_CHECKLIST, store);
}

function toggleTodayChecklistItem(id) {
  let checked = getTodayChecklistState();
  if (checked.includes(id)) {
    checked = checked.filter(x => x !== id);
    triggerHaptic('tap');
  } else {
    checked.push(id);
    triggerHaptic('tap');
    if (checked.length === TODAY_CHECKLIST_ITEMS.length) {
      triggerHaptic('success');
      playDing();
      showToast('🌟 All daily transformation pillars completed! Flawless consistency.', 'success');
    }
  }
  saveTodayChecklistState(checked);
  renderTodayChecklist();
}

function renderTodayChecklist() {
  const container = document.getElementById('today-checklist-container');
  const counter = document.getElementById('today-checklist-counter');
  if (!container) return;

  const checked = getTodayChecklistState();
  if (counter) {
    counter.innerText = `${checked.length} / ${TODAY_CHECKLIST_ITEMS.length}`;
    if (checked.length === TODAY_CHECKLIST_ITEMS.length) {
      counter.className = 'text-xs font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40';
    } else {
      counter.className = 'text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20';
    }
  }

  container.innerHTML = '';
  TODAY_CHECKLIST_ITEMS.forEach(item => {
    const isDone = checked.includes(item.id);
    const row = document.createElement('div');
    row.className = `p-2.5 rounded bg-[#161B24] border ${isDone ? 'border-emerald-500/30 bg-emerald-950/15' : 'border-white/[0.04]'} flex items-start gap-3 cursor-pointer hover:border-white/15 transition-all select-none`;
    row.onclick = () => toggleTodayChecklistItem(item.id);
    row.innerHTML = `
      <div class="w-5 h-5 rounded-sm border ${isDone ? 'bg-emerald-500 border-emerald-500 text-black font-extrabold' : 'border-white/20 bg-[#0C0E12] text-transparent'} flex items-center justify-center text-xs flex-shrink-0 mt-0.5 transition-all">
        ✓
      </div>
      <div class="min-w-0 flex-1">
        <div class="font-bold text-xs ${isDone ? 'text-gray-400 line-through' : 'text-white'} transition-colors">${item.title}</div>
        <div class="text-[10.5px] ${isDone ? 'text-gray-500' : 'text-gray-400'} mt-0.5 leading-snug">${item.detail}</div>
      </div>
    `;
    container.appendChild(row);
  });
}

// ----------------------------------------------------
// 10C. MY 12-WEEK GOALS TODO ENGINE (Persistent)
// ----------------------------------------------------
const MY_GOALS_ITEMS = [
  {
    id: 'goal_weight',
    title: '85.0 kg Target Weight',
    detail: 'Drop 9.5 kg total from 94.5 kg baseline across 12 structured weeks'
  },
  {
    id: 'goal_rate',
    title: '0.5–0.8 kg/Week Sustainable Fat Loss',
    detail: 'Preserves lean muscle mass & metabolic rate without crash dieting'
  },
  {
    id: 'goal_rir',
    title: 'Strict RIR 2 on Working Sets',
    detail: 'Stop 2 reps before mechanical failure to maintain technique & avoid injury'
  },
  {
    id: 'goal_progression',
    title: 'Double Progression Rule Executed',
    detail: 'Hit max reps on all sets before adding weight (+1–2.5 kg upper / +2.5–5 kg lower)'
  },
  {
    id: 'goal_deload',
    title: 'Week 7 Planned Deload Completed',
    detail: 'Reduce sets by 1 per exercise; let tendons and nervous system recover'
  },
  {
    id: 'goal_waist',
    title: 'Waist Circumference Reduction',
    detail: 'Direct verification of abdominal and visceral fat elimination'
  }
];

function getMyGoalsState() {
  return loadStorage(STORAGE_KEYS.MY_GOALS, []);
}

function saveMyGoalsState(checkedIds) {
  saveStorage(STORAGE_KEYS.MY_GOALS, checkedIds);
}

function toggleGoalItem(id) {
  let checked = getMyGoalsState();
  if (checked.includes(id)) {
    checked = checked.filter(x => x !== id);
    triggerHaptic('tap');
  } else {
    checked.push(id);
    triggerHaptic('tap');
    if (checked.length === MY_GOALS_ITEMS.length) {
      triggerHaptic('success');
      playDing();
      showToast('🏆 Master Milestone! All 12-Week Transformation goals checked.', 'success');
    }
  }
  saveMyGoalsState(checked);
  renderMyGoals();
}

function renderMyGoals() {
  const container = document.getElementById('my-goals-container');
  const counter = document.getElementById('my-goals-counter');
  if (!container) return;

  const checked = getMyGoalsState();
  if (counter) {
    counter.innerText = `${checked.length} / ${MY_GOALS_ITEMS.length}`;
    if (checked.length === MY_GOALS_ITEMS.length) {
      counter.className = 'text-xs font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40';
    } else {
      counter.className = 'text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20';
    }
  }

  container.innerHTML = '';
  MY_GOALS_ITEMS.forEach(item => {
    const isDone = checked.includes(item.id);
    const row = document.createElement('div');
    row.className = `p-2.5 rounded bg-[#161B24] border ${isDone ? 'border-emerald-500/30 bg-emerald-950/15' : 'border-white/[0.04]'} flex items-start gap-3 cursor-pointer hover:border-white/15 transition-all select-none`;
    row.onclick = () => toggleGoalItem(item.id);
    row.innerHTML = `
      <div class="w-5 h-5 rounded-sm border ${isDone ? 'bg-emerald-500 border-emerald-500 text-black font-extrabold' : 'border-white/20 bg-[#0C0E12] text-transparent'} flex items-center justify-center text-xs flex-shrink-0 mt-0.5 transition-all">
        ✓
      </div>
      <div class="min-w-0 flex-1">
        <div class="font-bold text-xs ${isDone ? 'text-gray-400 line-through' : 'text-white'} transition-colors">${item.title}</div>
        <div class="text-[10.5px] ${isDone ? 'text-gray-500' : 'text-gray-400'} mt-0.5 leading-snug">${item.detail}</div>
      </div>
    `;
    container.appendChild(row);
  });
}

function startTodayWorkoutSession() {
  AppState.currentDayId = getTodayDayId();
  switchNavTab('tracker');
}

function startSelectedDayWorkout() {
  AppState.currentDayId = AppState.programDayId;
  switchNavTab('tracker');
}

// ----------------------------------------------------
// 11. RENDER: VIEW 2 — WORKOUTS & 7-DAY PLAN
// ----------------------------------------------------
function renderWorkoutsView() {
  const tabsContainer = document.getElementById('workout-day-tabs');
  const day = WORKOUT_DAYS.find(d => d.id === AppState.programDayId) || WORKOUT_DAYS[1];

  if (tabsContainer) {
    tabsContainer.innerHTML = '';
    WORKOUT_DAYS.forEach(d => {
      const isSelected = AppState.programDayId === d.id;
      const isToday = getTodayDayId() === d.id;
      const btn = document.createElement('button');
      btn.className = `px-3 py-1.5 rounded font-mono text-xs font-bold transition-all flex items-center gap-1 ${
        isSelected
          ? 'bg-[#E5A93C] text-black shadow'
          : 'bg-[#161B24] border border-white/[0.08] text-gray-300 hover:text-white'
      }`;
      btn.innerHTML = `
        <span>${d.name.slice(0, 3)}</span>
        ${isToday ? '<span class="w-1.5 h-1.5 rounded-sm bg-emerald-400"></span>' : ''}
      `;
      btn.onclick = () => {
        AppState.programDayId = d.id;
        renderWorkoutsView();
      };
      tabsContainer.appendChild(btn);
    });
  }

  // Update card details
  const badge = document.getElementById('prog-day-badge');
  const time = document.getElementById('prog-day-time');
  const title = document.getElementById('prog-day-title');
  const subtitle = document.getElementById('prog-day-subtitle');
  const warmup = document.getElementById('prog-warmup-text');
  const cardio = document.getElementById('prog-cardio-text');
  const exList = document.getElementById('prog-exercises-list');

  if (badge) badge.innerText = `${day.name.toUpperCase()} • ${day.badge}`;
  if (time) time.innerText = day.time.replace('&bull;', '•');
  if (title) title.innerText = day.title;
  if (subtitle) subtitle.innerText = day.subtitle;
  if (warmup) warmup.innerText = day.warmup;
  if (cardio) cardio.innerText = day.cardio;

  if (exList) {
    exList.innerHTML = '';
    if (day.exercises.length === 0) {
      exList.innerHTML = `
        <div class="p-8 text-center text-gray-400 text-xs dashboard-card">
          <span class="text-3xl block mb-2">🌿</span>
          <div class="font-bold text-white text-sm mb-1">Rest & Mobility Protocol</div>
          Active recovery walk. Sleep 7–9 hours. Keep daily protein at 140–170g.
        </div>
      `;
    } else {
      day.exercises.forEach((ex, idx) => {
        const setsCount = AppState.isWeek7Deload ? Math.max(1, ex.sets - 1) : ex.sets;
        const row = document.createElement('div');
        row.className = 'p-3 rounded bg-[#161B24] border border-white/[0.06] space-y-2';
        row.innerHTML = `
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-start gap-3">
              <!-- Square Visual Motion Demo Thumbnail -->
              <div class="relative w-12 h-12 bg-[#0C0E12] border border-white/10 rounded flex-shrink-0 cursor-pointer overflow-hidden group shadow-inner" onclick="openExerciseDemo('${ex.id}')" title="Click to view form demo">
                <img src="${getExerciseThumbnailUrl(ex.id)}" alt="${ex.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                  <span class="text-[9px] bg-black/60 px-1 py-0.2 rounded text-white font-mono">🎬</span>
                </div>
              </div>

              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-gray-400 font-mono text-xs font-bold">#${idx + 1}</span>
                  <h4 class="text-xs font-extrabold text-white hover:text-amber-400 cursor-pointer" onclick="openExerciseDemo('${ex.id}')">${ex.name}</h4>
                </div>
                <div class="text-[11px] text-gray-400 flex flex-wrap items-center gap-2 mt-1">
                  <span class="text-amber-400 font-mono font-bold">${setsCount} Sets &times; ${ex.minReps}–${ex.maxReps}</span>
                  <span class="text-gray-600">&bull;</span>
                  <span>Rest: ${ex.rest}s</span>
                  <span class="text-gray-600">&bull;</span>
                  <span class="text-gray-400">${ex.equipment}</span>
                </div>
              </div>
            </div>

            <!-- Square Action Button -->
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button onclick="openExerciseDemo('${ex.id}')" class="px-2.5 py-1.5 rounded btn-dark text-xs font-bold flex items-center gap-1">
                <span>🎬 Demo</span>
              </button>
            </div>
          </div>

          <div class="text-[11px] text-gray-400 pt-2 border-t border-white/[0.04] leading-relaxed">
            <strong class="text-gray-300">Cue:</strong> ${ex.cues}
          </div>
        `;
        exList.appendChild(row);
      });
    }
  }
}

// ----------------------------------------------------
// 12. RENDER: VIEW 3 — TRACK SESSION (8:30 PM)
// ----------------------------------------------------
function autoSaveWorkoutSession() {
  const container = document.getElementById('tracker-exercise-cards');
  if (!container) return;

  const day = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  if (!day) return;

  const todayStr = new Date().toISOString().slice(0, 10);
  const exerciseData = [];
  let totalSets = 0;
  let completedSets = 0;
  let hasAnyInputOrCheck = false;

  day.exercises.forEach(ex => {
    const rows = container.querySelectorAll(`.set-row[data-exercise-id="${ex.id}"]`);
    const sets = Array.from(rows).map(r => {
      const weightRaw = r.querySelector('.input-weight')?.value?.trim();
      const repsRaw = r.querySelector('.input-reps')?.value?.trim();
      const isDone = r.querySelector('.btn-check-set')?.classList.contains('bg-emerald-500') || false;

      totalSets++;
      if (isDone) completedSets++;
      if (weightRaw !== '' && weightRaw !== undefined) hasAnyInputOrCheck = true;
      if (repsRaw !== '' && repsRaw !== undefined) hasAnyInputOrCheck = true;
      if (isDone) hasAnyInputOrCheck = true;

      return {
        setNum: Number(r.dataset.setNum),
        weight: (weightRaw !== '' && weightRaw !== undefined) ? Number(weightRaw) : '',
        reps: (repsRaw !== '' && repsRaw !== undefined) ? Number(repsRaw) : '',
        completed: isDone
      };
    });
    exerciseData.push({ id: ex.id, name: ex.name, sets });
  });

  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const existingIdx = logs.findIndex(l => l.date === todayStr && l.dayId === day.id);

  const entry = {
    date: todayStr,
    timestamp: logs[existingIdx]?.timestamp || new Date().toISOString(),
    lastModified: new Date().toISOString(),
    dayId: day.id,
    dayName: day.name,
    inProgress: true,
    totalSets,
    completedSets,
    exercises: exerciseData
  };

  if (existingIdx >= 0) logs[existingIdx] = { ...logs[existingIdx], ...entry };
  else logs.unshift(entry);

  saveStorage(STORAGE_KEYS.LOGS, logs);

  if (hasAnyInputOrCheck) {
    saveStorage(STORAGE_KEYS.ACTIVE_DRAFT, {
      dayId: day.id,
      date: todayStr,
      timestamp: Date.now(),
      completedSets,
      totalSets
    });
  }

  const indicator = document.getElementById('tracker-save-indicator');
  if (indicator) {
    const now = new Date();
    indicator.innerText = `● Auto-saved ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
    indicator.classList.remove('hidden');
  }
}

function resumeActiveWorkoutSession(dayId) {
  if (dayId) AppState.currentDayId = dayId;
  switchNavTab('tracker');
  showToast('⚡ Resumed your workout session right where you left off!', 'success');
}

function resetActiveWorkoutSession() {
  if (!confirm('Are you sure you want to reset and clear today\'s in-progress workout sets?')) return;
  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const filtered = logs.filter(l => !(l.date === todayStr && l.dayId === AppState.currentDayId));
  saveStorage(STORAGE_KEYS.LOGS, filtered);
  saveStorage(STORAGE_KEYS.ACTIVE_DRAFT, null);
  showToast('In-progress workout session cleared.', 'info');
  renderDashboardView();
  if (AppState.activeNav === 'tracker') renderTrackerView();
}

function renderTrackerView() {
  const day = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  const tag = document.getElementById('tracker-day-tag');
  const title = document.getElementById('tracker-title');
  const subtitle = document.getElementById('tracker-subtitle');
  const container = document.getElementById('tracker-exercise-cards');

  if (tag) tag.innerText = `${day.name.toUpperCase()} • ${day.badge}`;
  if (title) title.innerText = `${day.title}`;
  if (subtitle) subtitle.innerText = `8:30 PM • ${day.subtitle}`;

  if (!container) return;
  container.innerHTML = '';

  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const existingLog = logs.find(l => l.date === todayStr && l.dayId === day.id);

  day.exercises.forEach((ex, exIdx) => {
    const setsCount = AppState.isWeek7Deload ? Math.max(1, ex.sets - 1) : ex.sets;
    const card = document.createElement('div');
    card.className = 'dashboard-card p-4 space-y-3';

    let setsRowsHtml = '';
    for (let s = 1; s <= setsCount; s++) {
      const prevSet = existingLog?.exercises?.find(e => e.id === ex.id)?.sets?.find(st => st.setNum === s);
      const prevWeight = (prevSet?.weight !== undefined && prevSet?.weight !== null) ? prevSet.weight : '';
      const prevReps = (prevSet?.reps !== undefined && prevSet?.reps !== null) ? prevSet.reps : '';
      const isDone = prevSet?.completed || false;

      setsRowsHtml += `
        <div class="set-row flex items-center gap-2 py-2 border-b border-white/[0.04] last:border-b-0 text-xs" data-exercise-id="${ex.id}" data-set-num="${s}">
          <span class="w-6 font-mono font-bold text-gray-400">#${s}</span>
          <div class="flex-1 flex items-center gap-2">
            <div class="relative flex-1">
              <input type="number" step="0.5" placeholder="kg" value="${prevWeight}" class="input-weight w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" />
              <span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">KG</span>
            </div>
            <div class="relative flex-1">
              <input type="number" placeholder="reps" value="${prevReps}" class="input-reps w-full py-2 px-2.5 rounded bg-[#0C0E12] border border-white/10 text-white font-mono font-bold text-center text-xs focus:outline-none focus:border-amber-400" />
              <span class="absolute right-2 top-2 text-[9px] text-gray-500 pointer-events-none">REPS</span>
            </div>
          </div>
          <!-- Square Set Completion Button -->
          <button class="btn-check-set w-9 h-9 rounded flex items-center justify-center text-xs font-bold transition-all ${
            isDone ? 'bg-emerald-500 text-black font-extrabold' : 'btn-dark'
          }">
            ✓
          </button>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <div class="flex items-center gap-2.5">
          <!-- Square Demo Thumbnail -->
          <div class="relative w-10 h-10 bg-[#0C0E12] border border-white/10 rounded flex-shrink-0 cursor-pointer overflow-hidden group shadow-inner" onclick="openExerciseDemo('${ex.id}')" title="Form Demo">
            <img src="${getExerciseThumbnailUrl(ex.id)}" alt="${ex.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>

          <div>
            <h4 class="text-xs font-extrabold text-white flex items-center gap-1.5">
              <span>${ex.name}</span>
            </h4>
            <span class="text-[10px] text-amber-400 font-mono font-semibold">${ex.minReps}–${ex.maxReps} Rep Target • ${ex.rest}s rest</span>
          </div>
        </div>

        <button onclick="openExerciseDemo('${ex.id}')" class="px-2 py-1 rounded btn-dark text-[10px] font-bold flex items-center gap-1">
          🎬 Demo
        </button>
      </div>

      <div class="space-y-0.5">${setsRowsHtml}</div>
      <div id="prog-alert-${ex.id}" class="mt-2 text-[11px] p-2.5 rounded hidden"></div>
    `;

    container.appendChild(card);

    // Exercise-to-Exercise Transition Rest Divider
    if (exIdx < day.exercises.length - 1) {
      const nextEx = day.exercises[exIdx + 1];
      const transCard = document.createElement('div');
      transCard.className = 'flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 rounded bg-[#161B24]/90 border border-white/[0.05] shadow-inner';
      transCard.innerHTML = `
        <div class="flex items-center gap-2.5 text-xs">
          <span class="text-base">⏭️</span>
          <span class="text-gray-300">Finished ${ex.name}? Rest before <strong class="text-amber-400 font-bold">${nextEx.name}</strong></span>
        </div>
        <button onclick="startRestTimer(120, 'Transition: ${ex.name} ➔ ${nextEx.name}')" class="px-3.5 py-1.5 rounded btn-dark text-xs font-mono font-bold text-amber-400 border border-amber-500/25 hover:bg-amber-500/15 flex items-center justify-center gap-1.5 transition-colors">
          <span>⏱️ Start 120s Transition Rest</span>
        </button>
      `;
      container.appendChild(transCard);
    }
  });

  // Attach live auto-save input listeners across all weight & reps fields
  container.querySelectorAll('.input-weight, .input-reps').forEach(input => {
    input.addEventListener('input', () => autoSaveWorkoutSession());
    input.addEventListener('change', () => autoSaveWorkoutSession());
  });

  // Attach button events with immediate auto-save
  container.querySelectorAll('.btn-check-set').forEach(btn => {
    btn.onclick = (e) => {
      const row = e.target.closest('.set-row');
      const exId = row.dataset.exerciseId;
      const setNum = row.dataset.setNum;
      const isDone = btn.classList.contains('bg-emerald-500');

      if (!isDone) {
        btn.className = 'btn-check-set w-9 h-9 rounded flex items-center justify-center text-xs font-bold bg-emerald-500 text-black font-extrabold transition-all';
        triggerHaptic('tap');

        const ex = day.exercises.find(e => e.id === exId);
        if (ex) startRestTimer(ex.rest, `${ex.name} — Set #${setNum} complete`);
      } else {
        btn.className = 'btn-check-set w-9 h-9 rounded flex items-center justify-center text-xs font-bold btn-dark transition-all';
      }

      // Check double progression
      const allRows = container.querySelectorAll(`.set-row[data-exercise-id="${exId}"]`);
      const workingSets = Array.from(allRows).map(r => ({
        setNum: Number(r.dataset.setNum),
        weight: Number(r.querySelector('.input-weight').value) || 0,
        reps: Number(r.querySelector('.input-reps').value) || 0,
        completed: r.querySelector('.btn-check-set').classList.contains('bg-emerald-500')
      }));

      const res = checkDoubleProgression(exId, workingSets);
      const banner = document.getElementById(`prog-alert-${exId}`);
      if (banner && res) {
        banner.innerText = res.msg;
        banner.className = `mt-2 text-[11px] p-2.5 rounded ${
          res.type === 'PROGRESSED' 
            ? 'bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 font-bold' 
            : 'bg-amber-950/70 border border-amber-500/50 text-amber-300'
        }`;
        banner.classList.remove('hidden');
      }

      // Immediate auto-save to storage
      autoSaveWorkoutSession();
    };
  });
}

function saveActiveWorkoutSession() {
  const container = document.getElementById('tracker-exercise-cards');
  if (!container) return;

  const day = WORKOUT_DAYS.find(d => d.id === AppState.currentDayId) || WORKOUT_DAYS[1];
  if (!day) return;

  const todayStr = new Date().toISOString().slice(0, 10);
  const exerciseData = [];
  let totalSets = 0;
  let completedSets = 0;

  day.exercises.forEach(ex => {
    const rows = container.querySelectorAll(`.set-row[data-exercise-id="${ex.id}"]`);
    const sets = Array.from(rows).map(r => {
      const weightVal = r.querySelector('.input-weight')?.value?.trim();
      const repsVal = r.querySelector('.input-reps')?.value?.trim();
      const isDone = r.querySelector('.btn-check-set')?.classList.contains('bg-emerald-500') || false;

      totalSets++;
      if (isDone) completedSets++;

      return {
        setNum: Number(r.dataset.setNum),
        weight: (weightVal !== '' && weightVal !== undefined) ? Number(weightVal) : '',
        reps: (repsVal !== '' && repsVal !== undefined) ? Number(repsVal) : '',
        completed: isDone
      };
    });
    exerciseData.push({ id: ex.id, name: ex.name, sets });
  });

  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const existingIdx = logs.findIndex(l => l.date === todayStr && l.dayId === day.id);

  const entry = {
    date: todayStr,
    timestamp: logs[existingIdx]?.timestamp || new Date().toISOString(),
    completedAt: new Date().toISOString(),
    dayId: day.id,
    dayName: day.name,
    inProgress: false,
    totalSets,
    completedSets,
    exercises: exerciseData
  };

  if (existingIdx >= 0) logs[existingIdx] = entry;
  else logs.unshift(entry);

  saveStorage(STORAGE_KEYS.LOGS, logs);
  saveStorage(STORAGE_KEYS.ACTIVE_DRAFT, null);

  // Auto-check "8:30 PM Workout Session" in Today's Transformation Checklist!
  let todayChecklist = getTodayChecklistState();
  if (!todayChecklist.includes('chk_workout')) {
    todayChecklist.push('chk_workout');
    saveTodayChecklistState(todayChecklist);
    renderTodayChecklist();
  }

  triggerHaptic('success');
  playDing();
  showToast('🎉 Workout session successfully finished & logged!', 'success');
  switchNavTab('dashboard');
}

// ----------------------------------------------------
// 13. RENDER: VIEW 4 — PROGRESS & METRICS
// ----------------------------------------------------
function calculateRollingAvg() {
  const list = loadStorage(STORAGE_KEYS.WEIGH_INS, []);
  if (list.length === 0) return 94.5;
  const recent = list.slice(0, 7);
  const sum = recent.reduce((acc, curr) => acc + Number(curr.weight), 0);
  return (sum / recent.length).toFixed(1);
}

function renderProgressView() {
  const list = loadStorage(STORAGE_KEYS.WEIGH_INS, []);
  const avg = calculateRollingAvg();
  const startWeight = 94.5;
  const targetWeight = 85.0;
  const totalLost = (startWeight - avg).toFixed(1);
  const pct = Math.min(100, Math.max(0, ((totalLost / (startWeight - targetWeight)) * 100).toFixed(0)));

  const badge = document.getElementById('metric-total-loss-badge');
  const bar = document.getElementById('progress-bar-fill');
  const pctLabel = document.getElementById('progress-percent-label');
  const avgDisplay = document.getElementById('metric-rolling-avg-val');
  const historyList = document.getElementById('metrics-recent-history');

  if (badge) badge.innerText = `${totalLost > 0 ? `-${totalLost}` : totalLost} kg Total`;
  if (bar) bar.style.width = `${pct}%`;
  if (pctLabel) pctLabel.innerText = `${pct}% Achieved (${(avg - targetWeight).toFixed(1)} kg to go)`;
  if (avgDisplay) avgDisplay.innerText = `${avg} kg`;

  if (historyList) {
    historyList.innerHTML = '';
    if (list.length === 0) {
      historyList.innerHTML = '<p class="text-gray-500 text-xs">No weigh-ins logged yet. Log 3–4 mornings weekly to track rolling average.</p>';
    } else {
      list.slice(0, 7).forEach(item => {
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-2 rounded bg-[#161B24] border border-white/[0.04]';
        row.innerHTML = `
          <span class="text-gray-400 font-mono text-xs">${item.date}</span>
          <span class="font-extrabold text-white font-mono text-xs">${item.weight} kg</span>
        `;
        historyList.appendChild(row);
      });
    }
  }
}

function handleWeightSubmit() {
  const input = document.getElementById('input-weight-entry');
  if (!input || !input.value) return;
  const val = Number(input.value);
  if (val <= 0) return;

  const list = loadStorage(STORAGE_KEYS.WEIGH_INS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const existing = list.findIndex(w => w.date === todayStr);

  if (existing >= 0) list[existing].weight = val;
  else list.unshift({ date: todayStr, weight: val });

  saveStorage(STORAGE_KEYS.WEIGH_INS, list);
  input.value = '';
  showToast(`Logged weigh-in: ${val} kg`, 'success');
  renderProgressView();
}

// ----------------------------------------------------
// 14. RENDER: VIEW 5 — EXERCISE LIBRARY & DEMOS
// ----------------------------------------------------
function renderLibraryView(muscleFilter = 'all') {
  const container = document.getElementById('library-exercise-grid');
  if (!container) return;

  container.innerHTML = '';
  const seen = new Set();
  const allExercises = [];

  WORKOUT_DAYS.forEach(day => {
    day.exercises.forEach(ex => {
      if (!seen.has(ex.id)) {
        seen.add(ex.id);
        allExercises.push(ex);
      }
    });
  });

  const filtered = muscleFilter === 'all' 
    ? allExercises 
    : allExercises.filter(ex => {
        if (muscleFilter === 'arms') return ex.primaryMuscle === 'triceps' || ex.primaryMuscle === 'biceps';
        return ex.primaryMuscle.includes(muscleFilter);
      });

  filtered.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'dashboard-card p-3.5 space-y-2.5 hover:border-amber-400/40 transition-colors';
    card.innerHTML = `
      <div class="flex items-start gap-3">
        <!-- Square Demo Thumbnail -->
        <div class="relative w-14 h-14 bg-[#0C0E12] border border-white/10 rounded flex-shrink-0 cursor-pointer overflow-hidden group shadow-inner" onclick="openExerciseDemo('${ex.id}')">
          <img src="${getExerciseThumbnailUrl(ex.id)}" alt="${ex.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
            <span class="text-[9px] bg-black/60 px-1 py-0.2 rounded text-white font-mono">🎬</span>
          </div>
        </div>

        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between">
            <span class="text-[9.5px] uppercase font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-mono">${ex.primaryMuscle}</span>
            <span class="text-[10px] text-gray-500 font-mono">${ex.rest}s rest</span>
          </div>
          <h4 class="text-xs font-bold text-white mt-1 hover:text-amber-400 cursor-pointer truncate" onclick="openExerciseDemo('${ex.id}')">${ex.name}</h4>
          <p class="text-[10.5px] text-gray-400 mt-0.5">${ex.equipment}</p>
        </div>
      </div>

      <p class="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">${ex.cues}</p>

      <button onclick="openExerciseDemo('${ex.id}')" class="w-full py-1.5 rounded btn-dark text-xs font-bold flex items-center justify-center gap-1.5">
        <span>🎬 View Motion Demo & Form</span>
      </button>
    `;
    container.appendChild(card);
  });
}

function filterLibrary(muscle) {
  renderLibraryView(muscle);
}

// ----------------------------------------------------
// 15. QUICK LOG CONTROLLERS (Square Tiles)
// ----------------------------------------------------
function quickLogItem(type) {
  if (type === 'weight') {
    const cur = calculateRollingAvg();
    const entry = prompt('Morning weigh-in (kg):', cur);
    if (entry !== null && entry.trim() !== '') {
      const val = parseFloat(entry);
      if (!isNaN(val) && val > 0) {
        const list = loadStorage(STORAGE_KEYS.WEIGH_INS, []);
        const todayStr = new Date().toISOString().slice(0, 10);
        const existing = list.findIndex(w => w.date === todayStr);
        if (existing >= 0) list[existing].weight = val;
        else list.unshift({ date: todayStr, weight: val });
        saveStorage(STORAGE_KEYS.WEIGH_INS, list);
        triggerHaptic('success');
        showToast(`⚖️ Logged ${val} kg! Rolling average updated.`, 'success');
        renderDashboardView();
        renderProgressView();
      }
    }
  } else if (type === 'protein') {
    const entry = prompt('Log Protein intake today (grams):', '155');
    if (entry !== null && entry.trim() !== '') {
      const val = parseInt(entry, 10);
      if (!isNaN(val) && val > 0) {
        const store = loadStorage(STORAGE_KEYS.PROTEIN, {});
        const todayStr = new Date().toISOString().slice(0, 10);
        store[todayStr] = val;
        saveStorage(STORAGE_KEYS.PROTEIN, store);
        triggerHaptic('tap');
        showToast(`🍗 Logged ${val}g protein! (Goal: 140–170g)`, 'success');
      }
    }
  } else if (type === 'waist') {
    const entry = prompt('Enter waist measurement (e.g. 96 cm or 38 in):', '96 cm');
    if (entry !== null && entry.trim() !== '') {
      const store = loadStorage(STORAGE_KEYS.WAIST, []);
      const todayStr = new Date().toISOString().slice(0, 10);
      store.unshift({ date: todayStr, waist: entry });
      saveStorage(STORAGE_KEYS.WAIST, store);
      triggerHaptic('tap');
      showToast(`📏 Waist logged: ${entry}! Tracking visceral fat reduction.`, 'success');
    }
  } else if (type === 'water') {
    AppState.waterLogged = (Number(AppState.waterLogged) + 0.25).toFixed(2);
    const store = loadStorage(STORAGE_KEYS.WATER, {});
    const todayStr = new Date().toISOString().slice(0, 10);
    store[todayStr] = AppState.waterLogged;
    saveStorage(STORAGE_KEYS.WATER, store);
    triggerHaptic('tap');
    showToast(`💧 +250ml logged! Daily total: ${AppState.waterLogged} L`, 'success');
  } else if (type === 'sleep') {
    const entry = prompt('Hours of sleep last night (hrs):', '7.5');
    if (entry !== null && entry.trim() !== '') {
      const val = parseFloat(entry);
      if (!isNaN(val) && val > 0) {
        const store = loadStorage(STORAGE_KEYS.SLEEP, {});
        const todayStr = new Date().toISOString().slice(0, 10);
        store[todayStr] = val;
        saveStorage(STORAGE_KEYS.SLEEP, store);
        triggerHaptic('tap');
        showToast(`😴 Logged ${val} hours sleep! Recovery prioritized.`, 'success');
      }
    }
  }
}

function handleGlobalSearch(query) {
  if (!query || query.trim() === '') return;
  const q = query.toLowerCase();
  switchNavTab('library');
  const container = document.getElementById('library-exercise-grid');
  if (!container) return;

  const cards = container.children;
  Array.from(cards).forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(q) ? 'block' : 'none';
  });
}

// ----------------------------------------------------
// 16. EXERCISE DEMONSTRATION & MOTION PLAYER
// ----------------------------------------------------
let demoMotionInterval = null;
let demoCurrentImages = [];
let demoImageIndex = 0;
let demoMotionActive = true;

function openExerciseDemo(exerciseId) {
  let foundEx = null;
  WORKOUT_DAYS.forEach(day => {
    day.exercises.forEach(e => {
      if (e.id === exerciseId) foundEx = e;
    });
  });

  if (!foundEx) return;

  const demoData = EXERCISE_DEMOS[exerciseId] || {
    videoId: 'Cfp23zvkAfI',
    setup: ['Adjust your stance and maintain clean posture.', 'Engage core and set your baseline alignment.'],
    execution: ['Perform smooth controlled reps with 2–3s eccentric tempo.', 'Breathe rhythmically.'],
    mistakes: ['Using momentum instead of muscle control.'],
    breathing: 'Exhale on exertion; inhale on reset.'
  };

  const modal = document.getElementById('exercise-demo-modal');
  const title = document.getElementById('demo-exercise-title');
  const muscleBadge = document.getElementById('demo-exercise-muscle');
  const equipBadge = document.getElementById('demo-exercise-equip');
  const motionImg = document.getElementById('demo-motion-img');
  const ytLink = document.getElementById('demo-youtube-link');
  const setupList = document.getElementById('demo-setup-list');
  const executionList = document.getElementById('demo-execution-list');
  const mistakesList = document.getElementById('demo-mistakes-list');
  const breathingText = document.getElementById('demo-breathing-text');

  if (title) title.innerText = foundEx.name;
  if (muscleBadge) muscleBadge.innerText = foundEx.primaryMuscle.toUpperCase();
  if (equipBadge) equipBadge.innerText = foundEx.equipment;
  if (breathingText) breathingText.innerText = demoData.breathing;

  // Direct YouTube app link
  if (ytLink) {
    ytLink.href = demoData.videoId 
      ? `https://www.youtube.com/watch?v=${demoData.videoId}`
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(foundEx.name + ' form tutorial')}`;
  }

  // Setup Motion Images
  const rawPaths = EXERCISE_IMAGES[exerciseId] || ['Dumbbell_Bench_Press/0.jpg', 'Dumbbell_Bench_Press/1.jpg'];
  demoCurrentImages = rawPaths.map(p => `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${p}`);
  demoImageIndex = 0;
  demoMotionActive = true;

  if (motionImg && demoCurrentImages.length > 0) {
    motionImg.src = demoCurrentImages[0];
    updateStepBadge(0);
  }

  // Start animated visual motion loop (every 1.2s)
  if (demoMotionInterval) clearInterval(demoMotionInterval);
  demoMotionInterval = setInterval(() => {
    if (!demoMotionActive || demoCurrentImages.length < 2) return;
    demoImageIndex = (demoImageIndex + 1) % demoCurrentImages.length;
    if (motionImg) {
      motionImg.style.opacity = '0.7';
      setTimeout(() => {
        motionImg.src = demoCurrentImages[demoImageIndex];
        motionImg.style.opacity = '1';
        updateStepBadge(demoImageIndex);
      }, 80);
    }
  }, 1200);

  // Populate Setup
  if (setupList) {
    setupList.innerHTML = demoData.setup.map(s => `<li>${s}</li>`).join('');
  }

  // Populate Execution
  if (executionList) {
    executionList.innerHTML = demoData.execution.map(e => `<li>${e}</li>`).join('');
  }

  // Populate Mistakes
  if (mistakesList) {
    mistakesList.innerHTML = demoData.mistakes.map(m => `<li>${m}</li>`).join('');
  }

  triggerHaptic('tap');
  if (modal) modal.classList.remove('hidden');
}

function updateStepBadge(idx) {
  const badge = document.getElementById('demo-step-badge');
  if (!badge) return;
  badge.innerText = idx === 0 ? '1 / 2: Setup / Start' : '2 / 2: Peak Contraction';
}

function toggleMotionLoop() {
  demoMotionActive = !demoMotionActive;
  const icon = document.getElementById('motion-btn-icon');
  const txt = document.getElementById('motion-btn-text');
  if (icon && txt) {
    icon.innerText = demoMotionActive ? '⏸️' : '▶️';
    txt.innerText = demoMotionActive ? 'Pause' : 'Play';
  }
}

function stepMotionManually() {
  if (demoCurrentImages.length < 2) return;
  demoImageIndex = (demoImageIndex + 1) % demoCurrentImages.length;
  const motionImg = document.getElementById('demo-motion-img');
  if (motionImg) {
    motionImg.src = demoCurrentImages[demoImageIndex];
    updateStepBadge(demoImageIndex);
  }
}

function closeExerciseDemo() {
  const modal = document.getElementById('exercise-demo-modal');
  if (demoMotionInterval) {
    clearInterval(demoMotionInterval);
    demoMotionInterval = null;
  }
  if (modal) modal.classList.add('hidden');
}

// ----------------------------------------------------
// 17. WARMUP 8-MINUTE TIMER
// ----------------------------------------------------
function toggleWarmupTimer() {
  const display = document.getElementById('warmup-timer-display');
  const btn = document.getElementById('btn-warmup-toggle');
  if (!AppState.warmupRunning) {
    AppState.warmupRunning = true;
    if (btn) {
      btn.innerText = 'Pause';
      btn.className = 'px-3 py-1 rounded btn-dark text-xs font-bold';
    }
    AppState.warmupInterval = setInterval(() => {
      AppState.warmupRemaining--;
      const m = Math.floor(AppState.warmupRemaining / 60);
      const s = AppState.warmupRemaining % 60;
      if (display) display.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

      if (AppState.warmupRemaining <= 0) {
        clearInterval(AppState.warmupInterval);
        AppState.warmupRunning = false;
        playDing();
        triggerHaptic('rest');
        showToast('🚴 Warm-up complete! Time to lift.', 'success');
        if (btn) {
          btn.innerText = 'Start';
          btn.className = 'px-3 py-1 rounded btn-gold text-xs font-bold';
        }
      }
    }, 1000);
  } else {
    clearInterval(AppState.warmupInterval);
    AppState.warmupRunning = false;
    if (btn) {
      btn.innerText = 'Resume';
      btn.className = 'px-3 py-1 rounded btn-gold text-xs font-bold';
    }
  }
}

// ----------------------------------------------------
// 17B. 12-15 MIN POST-LIFT CARDIO TIMER
// ----------------------------------------------------
function toggleCardioTimer() {
  const display = document.getElementById('cardio-timer-display');
  const btn = document.getElementById('btn-cardio-toggle');
  if (!AppState.cardioRunning) {
    AppState.cardioRunning = true;
    if (btn) {
      btn.innerText = 'Pause';
      btn.className = 'px-3 py-1 rounded btn-dark text-xs font-bold';
    }
    AppState.cardioInterval = setInterval(() => {
      AppState.cardioRemaining--;
      const m = Math.floor(AppState.cardioRemaining / 60);
      const s = AppState.cardioRemaining % 60;
      if (display) display.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

      if (AppState.cardioRemaining <= 0) {
        clearInterval(AppState.cardioInterval);
        AppState.cardioRunning = false;
        playDing();
        triggerHaptic('rest');
        showToast('🏃 12-Min Post-Lift Cardio complete! Solid aerobic conditioning.', 'success');
        if (btn) {
          btn.innerText = 'Start';
          btn.className = 'px-3 py-1 rounded btn-gold text-xs font-bold';
        }
      }
    }, 1000);
  } else {
    clearInterval(AppState.cardioInterval);
    AppState.cardioRunning = false;
    if (btn) {
      btn.innerText = 'Resume';
      btn.className = 'px-3 py-1 rounded btn-gold text-xs font-bold';
    }
  }
}

// ----------------------------------------------------
// 18. WEEK 7 DELOAD TOGGLE (Square Button)
// ----------------------------------------------------
function toggleWeek7Deload() {
  AppState.isWeek7Deload = !AppState.isWeek7Deload;
  const dot = document.getElementById('deload-dot');
  const txt = document.getElementById('deload-text');
  const btn = document.getElementById('btn-deload-toggle');

  if (AppState.isWeek7Deload) {
    if (dot) dot.className = 'w-1.5 h-1.5 rounded-sm bg-amber-400';
    if (txt) txt.innerText = 'Deload: ON (-1 Set)';
    if (btn) btn.className = 'text-[11px] font-semibold px-2.5 py-1.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 transition-all flex items-center gap-1.5';
    showToast('Week 7 Deload Active: 1 fewer set per movement.', 'warning');
  } else {
    if (dot) dot.className = 'w-1.5 h-1.5 rounded-sm bg-gray-500';
    if (txt) txt.innerText = 'Deload: OFF';
    if (btn) btn.className = 'text-[11px] font-semibold px-2.5 py-1.5 rounded bg-[#161B24] border border-white/[0.08] text-gray-300 hover:text-white transition-all flex items-center gap-1.5';
    showToast('Normal set volume restored.');
  }

  if (AppState.activeNav === 'dashboard') renderDashboardView();
  else if (AppState.activeNav === 'workouts') renderWorkoutsView();
  else if (AppState.activeNav === 'tracker') renderTrackerView();
}

function openPlanOverviewModal() {
  const modal = document.getElementById('plan-overview-modal');
  if (modal) modal.classList.remove('hidden');
}

function closePlanOverviewModal() {
  const modal = document.getElementById('plan-overview-modal');
  if (modal) modal.classList.add('hidden');
}

// ----------------------------------------------------
// 19. FORCE REFRESH & CACHE BUSTING (Instant Android sync)
// ----------------------------------------------------
function forceAppRefresh() {
  showToast('🔄 Purging cached data and checking for latest updates...', 'info');

  if ('caches' in window) {
    caches.keys().then((names) => {
      return Promise.all(names.map((name) => caches.delete(name)));
    }).catch(() => {});
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let reg of registrations) {
        reg.unregister();
      }
    }).catch(() => {});
  }

  setTimeout(() => {
    const cleanUrl = window.location.origin + window.location.pathname + '?sync=' + Date.now();
    window.location.replace(cleanUrl);
  }, 400);
}

// ----------------------------------------------------
// 20. INITIALIZATION & ACCIDENTAL CLOSE RECOVERY
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderProgressView();

  const lastTab = loadStorage(STORAGE_KEYS.LAST_TAB, 'dashboard');
  const logs = loadStorage(STORAGE_KEYS.LOGS, []);
  const todayStr = new Date().toISOString().slice(0, 10);
  const activeLog = logs.find(l => l.date === todayStr && l.inProgress && l.exercises?.some(e => e.sets?.some(s => s.completed || (s.weight !== '' && s.weight !== undefined) || (s.reps !== '' && s.reps !== undefined))));

  // If user closed or reloaded mid-workout (within last 8 hours) or was on tracker, auto-resume where they left off!
  if (activeLog && (lastTab === 'tracker' || (Date.now() - new Date(activeLog.lastModified || activeLog.timestamp).getTime() < 8 * 60 * 60 * 1000))) {
    AppState.currentDayId = activeLog.dayId;
    switchNavTab('tracker');
    showToast('⚡ Automatically resumed your in-progress workout session!', 'success');
  } else {
    switchNavTab(lastTab === 'workouts' || lastTab === 'progress' || lastTab === 'library' ? lastTab : 'dashboard');
  }

  // Restore active rest countdown if phone was locked or app was minimized
  restoreRestTimerIfActive();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.update().catch(() => {});
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showToast('🚀 New update available! Tap Sync or reload.', 'info');
            }
          });
        }
      });
    }).catch(() => {});
  }
});

// Auto-save on accidental close, app minimizing, locking phone, or tab switching
document.addEventListener('visibilitychange', () => {
  if (AppState.activeNav === 'tracker') {
    autoSaveWorkoutSession();
  }
  if (document.visibilityState === 'visible') {
    restoreRestTimerIfActive();
  }
});

window.addEventListener('pagehide', () => {
  if (AppState.activeNav === 'tracker') {
    autoSaveWorkoutSession();
  }
});

window.addEventListener('beforeunload', () => {
  if (AppState.activeNav === 'tracker') {
    autoSaveWorkoutSession();
  }
});
