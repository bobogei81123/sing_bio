let questions = [
    {
        question: '{:Anatomy} is the study of structure, {:Physiology} is the study of function.',
    },
    {
        question: 'Animals have four main categories of tissues, {:\
epithelial tissue, connective tissue, muscle tissue and nervous tissue}',
    },
    {
        question: 'Epithelial cells come in three shapes, \
{:squamous} - like a fried egg, {:cuboidal} - as a cube and \
{:columnar} taller than they are wide.',
    },
    {
        question: 'Connectuve tissue of type {:Loose connective tissue}\
is the most widespread, consists of {:collagen collagen} and {:elastic fibers}.\
helps to join {:skin} to underlying tissues.',
    },
    {
        question: 'Connectuve tissue of type {:Fibrous connective tissue}\
 has {:densely packed collagen} fibers, and forms {:tendons} that attach muscle to \
bone and {:ligments} that link bone at joints.',
    },
    {
        question: 'Four types of Connectuve tissue other than loose/fibrous connective\
tissue are {adipose tissue, cartilage, bone and blood}.',
    },
    {
        question: 'There are three types of muscle, {:Skeletal muscle} causes \
voluntary movements, {:Cardiac muscle} pumps blood and {:Smooth muscle} moves walls\
of internal organs',
    },
    {
        question: 'The {which system:circulatory system} delivers oxygen to body cells, \
and the {:respiratory system} supplying the blood with oxygen.',
    },
    {
        question: 'The {which system:integumentary} protects against physical injury,\
 infection and drying out.',
    },
    {
        question: 'The {which system:skeletal system} supports the body, and \
the {which system:muscular system} moves the body.'
    },
    {
        question: 'The {which system:urinary system} removes waste from blood, \
and the {which system:digestive system} digests food.'
    },
    {
        question: 'The {which system:endocrine system} secretes hormones. The \
{which system:lymphatic} and {which system:immune system} protect the body from \
infection, while the first also returns excess body fluid.'
    },
    {
        question: 'The {which system:nervous system} detects stimuli. The \
{which system:reproductive system} produces gametes.'
    },
    {
        question: 'The skin consists of two layers, {:epidermis} forms the surface and \
{:dermis} forms a deeper layer.'
    },
    {
        question: 'Exposure of the skin to ultraviolet light forms {:melanin}.'
    },
    {
        question: 'CNS consists of {:brain and spinal cord}, while PNS consists of \
{:nerves and ganglia}.',
    },
    {
        question: 'The {:dendrites} of neurons receive signals while {:axons} transmits signal.'
    },
    {
        question: 'Neurons of all vertebrates and most invertebrates have supporting cells called {:glia}.'
    },
    {
        question: '{which cell:Schwann cell}, a kind of glia wraps axon in a thick insulating material \
called {:myeline sheath}. The gaps between these cells are called {:nodes of Ranvier}.'
    },
    {
        question: 'At rest, inside the cell is slightly {:negative} with K+ {:high} and Na+ {:low}.'
    },
    {
        question: '{:Acetylcholine} is released by PNS motor neurons to activate skelental muscles and \
by neurons in the CNS that affect {:memory, learning}.'
    },
    {
        question: '{:Biogenic amines} are neurotransmitters derived from amino acides and function \
in the CNS, includes {:serotonin and dopamin} which affect sleep, mood, attention and learning, and \
{:norepinephrine}, which linked with some types of depression.'
    },
    {
        question: '{:Endorphins} decrease our perception of pain, and {:Nitric oxide} triggers \
erections during sexual arousal.'
    },
    {
        question: '{:Radially} symmetrical animals have a nervous system arranged in a \
weblike system of neurons called a {:nerve net}.'
    },
    {
        question: 'Bilaterally symmetrical animals evolved {:cephalization}, the concentration \
of the nervous system at the head, and {:centralization}, the presence of a central nervous system.'
    },
    {
        question: 'Spaces fill with {:cerebrospinal fluid} forming {:ventricles} of the brain, \
forming the {:central canal} of the spinal cord, and surrounding the brain.'
    },
    {
        question: 'The PNS nerves could be divided into two groups, {:cranial and spinal} nerves.'
    },
    {
        question: 'Layers of connective tissue called {:meninges} protects the brain.'
    },
    {
        question: 'Autonomic nervous system is composed of three divisions, \
the {:parasympathetic division} primes the body for activities that gain and conserve energy, \
the {:sympathetic division} prepares the body for energy-consuming activities, \
the {:enteric division} consists of networks of neurons that control secretion and peristalsis.'
    },
    {
        question: 'The brain has three subdivisions, {:forebrain, midbrain and hindbrain}.'
    },
    {
        question: 'In brids and mammals, {:Cerebrun} is much larger. The outer region of it is called \
the {:cerebral cortex}.'
    },
    {
        question: 'A pair of {:hypothalamic} structure called the {:suprachiasmatic nuclei} function \
as our biological clock.'
    },
    {
        question: 'A thick band of nerve fibers called the {:corpus callosum} facilitates \
communication between the hemispheres. Groups of neurons called the {:basal nuclei} under it \
are important in motor coordination.'
    },
    {
        question: 'The {:limbic system} includes {:thalamus and hypothalamus} and two partial rings around them.'
    },
    {
        question: '{:Hippocampus} is involved in both the formation and recall of memories, \
{:amygdala} is central in laying donw emotional memories.'
    },
    {
        question: '{:Schizophrenia} is a severe mental disturbance which patients have a distorted \
perception of reality.',
    },
    {
        question: 'The {:Eustachian tube} permitting pressure equalization in the middle ear.',
    },
    {
        question: 'Pressure waves transmitted to the fluid of the {:cochlea} and bend hair cells in \
the {:organ of Corti} against the {:basilar membrane}.',
    },
    {
        question: 'Compound eyes consist of several thousand light detectors caled {:ommatidia}.',
    },
    {
        question: 'Light enters the eye through a small opening, the {:pupil} controlled by an {:iris}, \
then passes through a single disklike {:lens} and is focued onto the {:retina}. The center of focus \
is called the {:fovea}.',
    },
    {
        question: 'The outer surface of the human eyeball is a connective tissue called the {:sclera}, \
it\'s surrounds by a pigmented layer called the {:choroid}.',
    },
    {
        question: 'The large chamber behind the len is filled with {:vitreous humor}, while the \
smaller chamber in front the lens is called {:aqueous humor}.'
    },
    {
        question: 'The {:conjunctiva} lines the inner surface of the eyelids and folds back over the white \
of the eye.'
    },
    {
        question: 'When seeing a near object, {:ciliary} muscle {:contracted} and ligaments {:slacken}.'
    },
    {
        question: '{:Presbyopia} is the decreased flexibility of lens due to age.'
    },
    {
        question: 'The rods cell contains the visual pigment {:rhodopsin} which can absorb {dim or bright:dim} \
light, while cones cell contains the visual pigment {:photopsin} allow us to see color.'
    },
]


export default questions;
