export default function ArtistsList() {
    const artists = [
        { name: "アジカン", university: "九州工業大学野次馬" },
        { name: "04 Limited Sazabys", university: "歯科大ROM" },
        { name: "ONE OK ROCK", university: "北九州市立大学" },
        { name: "ハンブレッターズ", university: "福岡教育大学" },
        { name: "クリープハイプ", university: "九州女子大学" },
        { name: "ポルカドットスティングレイ", university: "産業医科大学" }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
            {artists.map((artist, index) => (
                <div 
                    key={index}
                    className="group hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-xl bg-white p-6"
                >
                    <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                            <span className="text-2xl">🎵</span>
                        </div>
                        <div className="flex-2">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">{artist.name}</h3>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <span className="text-sm">🏫</span>
                                <span className="text-sm">{artist.university}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}