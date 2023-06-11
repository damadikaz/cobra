export {onDragEnd}

function onDragEnd(result, state, setState) {
    if (!result.destination) return
    const {source, destination} = result

    if (source.droppableId !== destination.droppableId) {
        const sourceGroup = state[source.droppableId]
        const destinationGroup = [destination.droppableId]
        const sourceItems = [...sourceGroup.items]
        const destinationItems = [...destinationGroup.items]
        const [removed] = sourceItems.splice(source.index, 1)
        destinationItems.splice(destination.index, 0, removed)
        setState({
            ...state,
            [source.droppableId]: {
                ...sourceGroup,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destinationGroup,
                items: destinationItems,
            },
        })
    } else {
        const group = state[source.droppableId]
        const copiedItems = [...group.items]
        const [removed] = copiedItems.splice(source.index, 1)
        copiedItems.splice(destination.index, 0, removed)
        setState({
            ...state,
            [source.droppableId]: {
                ...group,
                items: copiedItems
            }
        })
    }
}