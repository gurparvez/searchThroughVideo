class Search {
    constructor(data) {
        console.log(data);
        this.transcript = data.results.transcripts[0].transcript;
        this.items = data.results.items;
        this.wordMappings = [];
        this.mapWithIndex();
    }

    removePunctuation(word) {
        return word.replace(/[^\w\s]/g, '');
    }

    mapWithIndex() {
        let currentIndex = 0;
        for (const item of this.items) {
            if (item.type === 'pronunciation') {
                const content = this.removePunctuation(
                    item.alternatives[0].content,
                );
                const startIdx = this.transcript.indexOf(content, currentIndex);
                const endIdx = startIdx + content.length - 1;
                currentIndex = endIdx + 1;
                if (startIdx !== -1) {
                    this.wordMappings.push({
                        word: content,
                        startIndex: startIdx,
                        endIndex: endIdx,
                        time: [item.start_time, item.end_time],
                    });
                }
            }
        }
    }

    searchWord(query) {
        const lowerCaseTranscript = this.transcript.toLowerCase();
        const lowerCaseQuery = query.toLowerCase();
        const fullStringIndex = lowerCaseTranscript.indexOf(lowerCaseQuery);

        if (fullStringIndex !== -1) {
            return [fullStringIndex];
        } else {
            const words = query.split(' ');
            const result = [];

            for (const word of words) {
                const lowerCaseWord = word.toLowerCase();
                const index = lowerCaseTranscript.indexOf(lowerCaseWord);
                if (index !== -1) {
                    result.push(index);
                } else {
                    // Check for partial matches
                    for (let i = 0; i < lowerCaseWord.length; i++) {
                        const partialWord = lowerCaseWord.substring(
                            0,
                            lowerCaseWord.length - i,
                        );
                        const partialIndex =
                            lowerCaseTranscript.indexOf(partialWord);
                        if (partialIndex !== -1) {
                            result.push(partialIndex);
                            break;
                        }
                    }
                }
            }

            return result;
        }
    }

    searchByIndex(index) {
        let left = 0;
        let right = this.wordMappings.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const mapping = this.wordMappings[mid];
            if (index >= mapping.startIndex && index <= mapping.endIndex) {
                return mapping;
            } else if (index < mapping.startIndex) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return null; // If no mapping found for the given index
    }

    search(query) {
        const indexes = this.searchWord(query);
        const res = [];
        for (let index of indexes) {
            if (index !== -1) {
                const obj = this.searchByIndex(index);
                res.push(obj);
            }
        }

        return res;
    }
}

// Usage
// import fs from 'fs/promises';

// async function main() {
//     try {
//         const data = await fs.readFile('./data.json', 'utf-8');
//         const s = new Search(JSON.parse(data));
//         console.log(await s.search('mac book'));
//     } catch (error) {
//         console.error('Error reading or parsing data:', error);
//     }
// }

// main();

export default Search;
