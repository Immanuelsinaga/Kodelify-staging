import { Rank } from "../Constant";

const Top5rank = () => {
  return(
    <>
      <div id="Ranking" className="pt-5 inset-0 -z-10 w-full pb-4 bg-slate-200">
        <div className="container max-w-7xl py-5 px-4 mx-auto">
          <h4 className="font-semibold text-secondary text-center">RANKING</h4>
          <h2 className="font-bold text-2xl text-slate-700 text-center">
            TOP 5 LEADERBOARD
          </h2>
          <div class="relative overflow-x-auto py-8">
              <table class="w-3/4 mx-auto text-sm text-left rtl:text-right text-gray-500 ">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-100 ">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              No
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Users
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Rating
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {Rank.map((item, index) => (
                      <tr class="bg-white border-b">
                          <th scope="row" class="px-6 py-4 font-semibold text-slate-800 whitespace-nowrap">
                            {item.rank}
                          </th>
                          <th scope="row" class="px-6 py-4 font-semibold text-slate-800 whitespace-nowrap">
                            {item.user}
                          </th>
                          <td class="px-6 py-4 font-semibold text-slate-800 whitespace-nowrap">
                            {item.rating}
                          </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top5rank