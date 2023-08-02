


export default function ToDo() {
    const list = [
        {id: 0, content: 'foo'},
        {id: 1, content: 'foo'},
        {id: 2, content: 'foo'}
    ]
    console.log('here')

    return (
        <table>
            <tbody>

                    {list.map((element) => (
                        <tr key={element.id}>
                            <td key={element.id}>{element.content}</td>
                        </tr>
                    ))}

            </tbody>
        </table>
    )
}