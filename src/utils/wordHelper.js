exports.findVerbInfo = (entries) => {
    for (const entry of entries) {
        for (const meaning of entry.meanings) {
            if (meaning.partOfSpeech === 'verb') {
                return {
                    definition: meaning.definitions[0].definition,
                    example: meaning.definitions[0].example
                };
            }
        }
    }
    return null;
}

