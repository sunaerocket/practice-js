/* 베스트 앨범 문제
 * 장르별로 가장 많이 재생도니 노래를 두 개씩 모아 수록
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록
 * 3. 장르 내 재생 횟수가 같은 노래 중 인덱스가 낮은 노래를 먼저 수록
 *
 */

function solution(genres, plays) {
  const genreMap = new Map();

  const songs = genres.map((genre, index) => {
    return {
      genre,
      index,
      play: plays[index],
    };
  });

  // 장르끼리 묶기
  // 묶인 노래들을 재생 순으로 정렬
  // 노래를 2개 까지만 자르기
  songs.forEach(({ genre, index, play }) => {
    const data = genreMap.get(genre) || { total: 0, songs: [] };
    genreMap.set(genre, {
      total: data.total + play,
      songs: [...data.songs, { play, index }]
        .sort((a, b) => b.play - a.play)
        .slice(0, 2),
    });
  });

  const bestAlbum = [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);

  return bestAlbum;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
