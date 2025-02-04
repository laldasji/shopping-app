const heading = [
    'This is a FAKE home page',
    'You\'ll find nothing here but template text',
    'I swear, there\'s nothing of interest',
    '"Still you persist? Very Well" - Augur Of Dunlain',
    'What\'s brown and sticky? A stick!!!'
];

const content = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi magni corrupti quae laudantium qui eveniet ipsum voluptatem optio architecto aliquid, provident, eligendi praesentium et ut nostrum vel laboriosam modi.
    Sit blanditiis consequuntur, repellendus reprehenderit veniam iure eum quisquam. Ipsa et ut, beatae consequuntur distinctio sequi corrupti temporibus aliquid explicabo adipisci, fugiat quis hic fuga? Nesciunt obcaecati magnam quibusdam qui.
    Praesentium deserunt in eius est inventore at fugit ad aspernatur possimus doloribus, consectetur officia temporibus natus. Quia porro in amet vitae optio sapiente sint voluptas ex esse assumenda. Laboriosam, nulla!
    Obcaecati in, sed placeat assumenda cum rem quisquam amet id officiis corrupti error molestias! Soluta, praesentium ducimus quas minima tempore eos voluptatem deserunt alias velit dolore dicta fugiat quibusdam! Eos?
    `,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsum? Mollitia ex quo dicta quisquam nihil saepe explicabo, ipsa qui vel est, consequuntur accusamus magnam ad modi laboriosam odio doloremque!
    Adipisci doloribus explicabo eligendi saepe inventore, quasi, fugiat quas quos quis sapiente molestias autem? Atque, quam sed totam facilis pariatur iure nostrum eum! Recusandae cupiditate sit, odit molestiae iusto quis!
    Esse, qui culpa delectus architecto, dolores illo voluptatum soluta at id ducimus est quo aut, maxime tenetur sint? Quidem vitae laborum distinctio omnis eveniet cupiditate accusamus! Totam aut odit officia!
    Sint ea, ducimus exercitationem commodi fuga quidem odio amet facere quibusdam, necessitatibus aliquam. Ut assumenda harum consectetur facilis enim a impedit nesciunt numquam accusamus! Nisi earum corporis veniam fugiat iusto.
    `,

    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos voluptatem ullam doloremque error, odit tempore quo temporibus. Blanditiis officia eveniet cumque iste saepe, qui ipsum expedita modi suscipit, harum facere!
    Placeat possimus quibusdam veritatis molestiae nulla amet maxime soluta cum dolores mollitia repellendus tempora similique saepe natus magni, fugit et minima quod, dicta quasi rem ut nesciunt? Nobis, iure maiores?
    Eaque vero, aspernatur reiciendis numquam id, laudantium sint excepturi reprehenderit repellendus recusandae voluptatibus error. Voluptates dolorem culpa tenetur magnam eum, repudiandae dicta amet vel quibusdam, labore nemo, veniam error dolore.
    Rerum nemo nulla odio veniam quos debitis maxime nisi saepe beatae sapiente iusto molestias adipisci repellendus veritatis, consequatur nostrum nihil? Ducimus sed quam rem quidem sapiente cupiditate eos, tempora dolores.
    `,

    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis accusantium, cumque quidem, esse rerum praesentium tempora fugit corporis recusandae sequi porro hic officia molestias eaque fugiat saepe ipsa et doloribus!
    Saepe aspernatur itaque aliquid voluptatum mollitia repudiandae, autem atque voluptas nulla expedita asperiores excepturi enim harum voluptate laboriosam officiis perspiciatis molestias recusandae laudantium quasi. Minus tempora error id optio dolore.
    Voluptas repellendus corporis porro fuga sed nisi, magnam doloribus nam fugit totam voluptatibus est dolor alias? Tempore doloribus temporibus voluptatem, quos possimus repellendus voluptatibus voluptatum fuga quae! Assumenda, necessitatibus animi.
    Sit nostrum dolor sint ea odio neque assumenda magnam, ipsam aliquam vel, quisquam enim inventore dicta libero atque. Sed illo aperiam voluptates reprehenderit praesentium fugit debitis, recusandae rerum perspiciatis iusto!
    `,

    `I know what you're thinking, your day is ruined and your disappointment is immeasurable, I know. But I warned you didn't I? Lorem ipsumthing to eat?? Non iste illo deserunt tenetur unde nesciunt incidunt quo nisi fugiat officiis, quam quasi magnam! Quia esse dolorem non exercitationem eius ratione!
    Illo repellat asperiores et reiciendis quas eos totam qui rerum omnis numquam odit culpa corrupti unde, deleniti possimus! Cum tempore minus ad porro ab quisquam iusto quae sit voluptate? Culpa?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex voluptate repudiandae libero unde sunt, veniam enim commodi quibusdam, quasi suscipit amet possimus, non nobis minus dolorum provident qui fuga.
    Dolores magni saepe hic voluptates sunt fugiat quia, molestiae atque! Voluptatum perspiciatis harum non dicta voluptate placeat modi ipsa asperiores officiis alias! Iure nam ipsam asperiores voluptates, id modi aperiam.
    `
]

function Home() {
    return (
        <div className="m-5">
            {content.map((element, index) => (
                <div key={heading[index]} className="flex flex-col even:text-right mb-8 mt-2">
                <h1 className="font-medium">{heading[index]}</h1>
                <hr className={`w-6/10 mb-2 mt-2 text-sky-600 bg-sky-600 h-0.5 border-0 rounded-full ${index % 2 == 1 ? 'self-end' : ''}`}/>
                <p className={`w-6/10 text-justify ${index % 2 == 1 ? 'self-end' : ''}`}>{element}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;