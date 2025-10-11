function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "https://sayhentaii.art", script: "gen.js" },
        { title: "Manhwa", input: "https://sayhentaii.art/genre/manhwa", script: "gen.js" },
        { title: "Manga", input: "https://sayhentaii.art/genre/manga", script: "gen.js" },
        { title: "Manhua", input: "https://sayhentaii.art/genre/manhua", script: "gen.js" },
    ]);
}
