var mon = [
	["An toàn cơ sở dữ liệu-1-24 (A1901)",4,"28/10/24","10/11/24","1->3"],
	["An toàn cơ sở dữ liệu-1-24 (A1901)",2,"11/11/24","05/01/25","1->3"],
	["An toàn cơ sở dữ liệu-1-24 (A1902)",2,"28/10/24","10/11/24","7->9"],
	["An toàn cơ sở dữ liệu-1-24 (A1902)",4,"28/10/24","10/11/24","7->9"],
	["An toàn cơ sở dữ liệu-1-24 (A1902)",2,"11/11/24","05/01/25","7->9"],
	["An toàn cơ sở dữ liệu-1-24 (A1903)",2,"28/10/24","10/11/24","4->6"],
	["An toàn cơ sở dữ liệu-1-24 (A1903)",4,"28/10/24","10/11/24","4->6"],
	["An toàn cơ sở dữ liệu-1-24 (A1903)",2,"11/11/24","05/01/25","4->6"],
	["An toàn cơ sở dữ liệu-1-24 (A1904)",2,"28/10/24","10/11/24","10->12"],
	["An toàn cơ sở dữ liệu-1-24 (A1904)",4,"28/10/24","10/11/24","10->12"],
	["An toàn cơ sở dữ liệu-1-24 (A1904)",2,"11/11/24","05/01/25","10->12"],
	["An toàn cơ sở dữ liệu-1-24 (A1905)",5,"28/10/24","10/11/24","1->3"],
	["An toàn cơ sở dữ liệu-1-24 (A1905)",6,"28/10/24","10/11/24","1->3"],
	["An toàn cơ sở dữ liệu-1-24 (A1905)",6,"11/11/24","05/01/25","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D601)",2,"12/08/24","01/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D601)",4,"12/08/24","01/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D601)",4,"02/09/24","08/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D601)",2,"09/09/24","15/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D601)",4,"09/09/24","15/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D601)",2,"16/09/24","22/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D601)",4,"16/09/24","22/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D601)",2,"23/09/24","13/10/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D602)",2,"12/08/24","01/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D602)",4,"12/08/24","01/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D602)",4,"02/09/24","08/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D602)",2,"09/09/24","15/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D602)",4,"09/09/24","15/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D602)",2,"16/09/24","22/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D602)",4,"16/09/24","22/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D602)",2,"23/09/24","13/10/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D603)",2,"12/08/24","01/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D603)",4,"12/08/24","01/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D603)",4,"02/09/24","08/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D603)",2,"09/09/24","15/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D603)",4,"09/09/24","15/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D603)",2,"16/09/24","22/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D603)",4,"16/09/24","22/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D603)",2,"23/09/24","13/10/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D604)",2,"12/08/24","01/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D604)",4,"12/08/24","01/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D604)",4,"02/09/24","08/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D604)",2,"09/09/24","15/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D604)",4,"09/09/24","15/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D604)",2,"16/09/24","22/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D604)",4,"16/09/24","22/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D604)",2,"23/09/24","13/10/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D605)",3,"12/08/24","15/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D605)",5,"12/08/24","15/09/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D605)",3,"16/09/24","13/10/24","1->3"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D606)",3,"12/08/24","15/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D606)",5,"12/08/24","15/09/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D606)",3,"16/09/24","13/10/24","7->9"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D607)",3,"12/08/24","15/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D607)",5,"12/08/24","15/09/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D607)",3,"16/09/24","13/10/24","4->6"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D608)",3,"12/08/24","15/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D608)",5,"12/08/24","15/09/24","10->12"],
	["Cấu trúc dữ liệu và giải thuật-1-24 (A19C7D608)",3,"16/09/24","13/10/24","10->12"],
	["Cơ sở điều khiển tự động-1-24 (D601)",2,"12/08/24","01/09/24","1->3"],
	["Cơ sở điều khiển tự động-1-24 (D601)",4,"12/08/24","01/09/24","1->3"],
	["Cơ sở điều khiển tự động-1-24 (D601)",4,"02/09/24","08/09/24","1->3"],
	["Cơ sở điều khiển tự động-1-24 (D601)",2,"09/09/24","13/10/24","1->3"],
	["Cơ sở điều khiển tự động-1-24 (D602)",2,"12/08/24","01/09/24","7->9"],
	["Cơ sở điều khiển tự động-1-24 (D602)",4,"12/08/24","01/09/24","7->9"],
	["Cơ sở điều khiển tự động-1-24 (D602)",4,"02/09/24","08/09/24","7->9"],
	["Cơ sở điều khiển tự động-1-24 (D602)",2,"09/09/24","13/10/24","7->9"],
	["Công nghệ phần mềm-1-24 (C701)",2,"28/10/24","10/11/24","7->9"],
	["Công nghệ phần mềm-1-24 (C701)",4,"28/10/24","10/11/24","7->9"],
	["Công nghệ phần mềm-1-24 (C701)",2,"11/11/24","05/01/25","7->9"],
	["Công nghệ phần mềm-1-24 (C702)",2,"28/10/24","10/11/24","1->3"],
	["Công nghệ phần mềm-1-24 (C702)",4,"28/10/24","10/11/24","1->3"],
	["Công nghệ phần mềm-1-24 (C702)",2,"11/11/24","05/01/25","1->3"],
	["Công nghệ phần mềm-1-24 (C703)",2,"28/10/24","10/11/24","10->12"],
	["Công nghệ phần mềm-1-24 (C703)",4,"28/10/24","10/11/24","10->12"],
	["Công nghệ phần mềm-1-24 (C703)",2,"11/11/24","05/01/25","10->12"],
	["Điện tử công suất-1-24 (D601)",2,"12/08/24","01/09/24","4->6"],
	["Điện tử công suất-1-24 (D601)",4,"12/08/24","01/09/24","4->6"],
	["Điện tử công suất-1-24 (D601)",4,"02/09/24","08/09/24","4->6"],
	["Điện tử công suất-1-24 (D601)",2,"09/09/24","15/09/24","4->6"],
	["Điện tử công suất-1-24 (D601)",4,"09/09/24","15/09/24","4->6"],
	["Điện tử công suất-1-24 (D601)",2,"16/09/24","22/09/24","4->6"],
	["Điện tử công suất-1-24 (D601)",4,"16/09/24","22/09/24","4->6"],
	["Điện tử công suất-1-24 (D601)",2,"23/09/24","13/10/24","4->6"],
	["Điện tử công suất-1-24 (D602)",2,"12/08/24","01/09/24","10->12"],
	["Điện tử công suất-1-24 (D602)",4,"12/08/24","01/09/24","10->12"],
	["Điện tử công suất-1-24 (D602)",4,"02/09/24","08/09/24","10->12"],
	["Điện tử công suất-1-24 (D602)",2,"09/09/24","15/09/24","10->12"],
	["Điện tử công suất-1-24 (D602)",4,"09/09/24","15/09/24","10->12"],
	["Điện tử công suất-1-24 (D602)",2,"16/09/24","22/09/24","10->12"],
	["Điện tử công suất-1-24 (D602)",4,"16/09/24","22/09/24","10->12"],
	["Điện tử công suất-1-24 (D602)",2,"23/09/24","13/10/24","10->12"],
	["Giáo dục thể chất 5-1-24 (C7D601-bóng bàn)",3,"28/10/24","05/01/25","1->3"],
	["Giáo dục thể chất 5-1-24 (C7D602-bóng đá)",3,"28/10/24","05/01/25","10->12"],
	["Giáo dục thể chất 5-1-24 (C7D603-cầu lông)",6,"28/10/24","05/01/25","10->12"],
	["Giáo dục thể chất 5-1-24 (C7D604- cờ vua)",6,"28/10/24","05/01/25","4->6"],
	["Giáo dục thể chất 5-1-24 (C7D605- bóng rổ)",3,"28/10/24","05/01/25","1->3"],
	["Giáo dục thể chất 5-1-24 (C7D606-cầu lông)",6,"28/10/24","05/01/25","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C701)",2,"12/08/24","01/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C701)",4,"12/08/24","01/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C701)",4,"02/09/24","08/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C701)",2,"09/09/24","15/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C701)",4,"09/09/24","15/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C701)",2,"16/09/24","22/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C701)",4,"16/09/24","22/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C701)",2,"23/09/24","13/10/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C702)",2,"12/08/24","01/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C702)",4,"12/08/24","01/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C702)",4,"02/09/24","08/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C702)",2,"09/09/24","15/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C702)",4,"09/09/24","15/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C702)",2,"16/09/24","22/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C702)",4,"16/09/24","22/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C702)",2,"23/09/24","13/10/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C703)",2,"12/08/24","01/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C703)",4,"12/08/24","01/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C703)",4,"02/09/24","08/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C703)",2,"09/09/24","15/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C703)",4,"09/09/24","15/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C703)",2,"16/09/24","22/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C703)",4,"16/09/24","22/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C703)",2,"23/09/24","13/10/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C704)",2,"12/08/24","01/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C704)",4,"12/08/24","01/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C704)",4,"02/09/24","08/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C704)",2,"09/09/24","15/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C704)",4,"09/09/24","15/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C704)",2,"16/09/24","22/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C704)",4,"16/09/24","22/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C704)",2,"23/09/24","13/10/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C705)",3,"12/08/24","15/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C705)",5,"12/08/24","15/09/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C705)",3,"16/09/24","13/10/24","4->6"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C706)",3,"12/08/24","15/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C706)",5,"12/08/24","15/09/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C706)",3,"16/09/24","13/10/24","10->12"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C707)",3,"12/08/24","15/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C707)",5,"12/08/24","15/09/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C707)",3,"16/09/24","13/10/24","1->3"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C708)",3,"12/08/24","15/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C708)",5,"12/08/24","15/09/24","7->9"],
	["Hệ quản trị cơ sở dữ liệu-1-24 (A19C708)",3,"16/09/24","13/10/24","7->9"],
	["Kỹ thuật đo lường điện tử-1-24 (D601)",2,"28/10/24","17/11/24","4->6"],
	["Kỹ thuật đo lường điện tử-1-24 (D601)",4,"28/10/24","17/11/24","4->6"],
	["Kỹ thuật đo lường điện tử-1-24 (D601)",2,"18/11/24","24/11/24","4->6"],
	["Kỹ thuật đo lường điện tử-1-24 (D601)",2,"25/11/24","01/12/24","4->6"],
	["Kỹ thuật đo lường điện tử-1-24 (D601)",4,"25/11/24","01/12/24","4->6"],
	["Kỹ thuật đo lường điện tử-1-24 (D601)",2,"02/12/24","05/01/25","4->6"],
	["Kỹ thuật đo lường điện tử-1-24 (D602)",2,"28/10/24","17/11/24","7->9"],
	["Kỹ thuật đo lường điện tử-1-24 (D602)",4,"28/10/24","17/11/24","7->9"],
	["Kỹ thuật đo lường điện tử-1-24 (D602)",2,"18/11/24","24/11/24","7->9"],
	["Kỹ thuật đo lường điện tử-1-24 (D602)",2,"25/11/24","01/12/24","7->9"],
	["Kỹ thuật đo lường điện tử-1-24 (D602)",4,"25/11/24","01/12/24","7->9"],
	["Kỹ thuật đo lường điện tử-1-24 (D602)",2,"02/12/24","05/01/25","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D601)",5,"12/08/24","06/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D601)",3,"07/10/24","13/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D601)",5,"07/10/24","13/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D602)",5,"12/08/24","06/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D602)",3,"07/10/24","13/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D602)",5,"07/10/24","13/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D603)",5,"12/08/24","06/10/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D603)",3,"07/10/24","13/10/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D603)",5,"07/10/24","13/10/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D604)",5,"12/08/24","06/10/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D604)",3,"07/10/24","13/10/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D604)",5,"07/10/24","13/10/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D605)",2,"12/08/24","01/09/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D605)",2,"09/09/24","29/09/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D605)",2,"30/09/24","06/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D605)",4,"30/09/24","06/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D605)",2,"07/10/24","13/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D605)",4,"07/10/24","13/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D606)",2,"12/08/24","01/09/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D606)",2,"09/09/24","29/09/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D606)",2,"30/09/24","06/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D606)",4,"30/09/24","06/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D606)",2,"07/10/24","13/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D606)",4,"07/10/24","13/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D607)",2,"12/08/24","01/09/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D607)",2,"09/09/24","29/09/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D607)",2,"30/09/24","06/10/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D607)",4,"30/09/24","06/10/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D607)",2,"07/10/24","13/10/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D607)",4,"07/10/24","13/10/24","4->6"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D608)",2,"12/08/24","01/09/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D608)",2,"09/09/24","29/09/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D608)",2,"30/09/24","06/10/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D608)",4,"30/09/24","06/10/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D608)",2,"07/10/24","13/10/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D608)",4,"07/10/24","13/10/24","10->12"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D609)",6,"12/08/24","06/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D609)",4,"07/10/24","13/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D609)",6,"07/10/24","13/10/24","1->3"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D610)",6,"12/08/24","06/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D610)",4,"07/10/24","13/10/24","7->9"],
	["Kỹ thuật truyền số liệu-1-24 (A19C7D610)",6,"07/10/24","13/10/24","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D601)",2,"28/10/24","17/11/24","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D601)",4,"28/10/24","17/11/24","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D601)",2,"18/11/24","24/11/24","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D601)",2,"25/11/24","01/12/24","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D601)",4,"25/11/24","01/12/24","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D601)",2,"02/12/24","05/01/25","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D602)",2,"28/10/24","17/11/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D602)",4,"28/10/24","17/11/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D602)",2,"18/11/24","24/11/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D602)",2,"25/11/24","01/12/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D602)",4,"25/11/24","01/12/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D602)",2,"02/12/24","05/01/25","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D603)",2,"28/10/24","17/11/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D603)",4,"28/10/24","17/11/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D603)",2,"18/11/24","24/11/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D603)",2,"25/11/24","01/12/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D603)",4,"25/11/24","01/12/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D603)",2,"02/12/24","05/01/25","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D604)",2,"28/10/24","17/11/24","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D604)",4,"28/10/24","17/11/24","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D604)",2,"18/11/24","24/11/24","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D604)",2,"25/11/24","01/12/24","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D604)",4,"25/11/24","01/12/24","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D604)",2,"02/12/24","05/01/25","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D605)",3,"28/10/24","24/11/24","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D605)",5,"28/10/24","24/11/24","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D605)",3,"25/11/24","05/01/25","4->6"],
	["Lập trình hướng đối tượng-1-24 (A19C7D606)",3,"28/10/24","24/11/24","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D606)",5,"28/10/24","24/11/24","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D606)",3,"25/11/24","05/01/25","7->9"],
	["Lập trình hướng đối tượng-1-24 (A19C7D607)",3,"28/10/24","24/11/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D607)",5,"28/10/24","24/11/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D607)",3,"25/11/24","05/01/25","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D608)",3,"28/10/24","24/11/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D608)",5,"28/10/24","24/11/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D608)",3,"25/11/24","05/01/25","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D609)",4,"28/10/24","17/11/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D609)",6,"28/10/24","17/11/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D609)",6,"18/11/24","24/11/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D609)",4,"25/11/24","01/12/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D609)",6,"25/11/24","01/12/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D609)",4,"02/12/24","29/12/24","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D609)",6,"30/12/24","05/01/25","1->3"],
	["Lập trình hướng đối tượng-1-24 (A19C7D610)",4,"28/10/24","17/11/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D610)",6,"28/10/24","17/11/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D610)",6,"18/11/24","24/11/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D610)",4,"25/11/24","01/12/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D610)",6,"25/11/24","01/12/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D610)",4,"02/12/24","29/12/24","10->12"],
	["Lập trình hướng đối tượng-1-24 (A19C7D610)",6,"30/12/24","05/01/25","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C701)",3,"28/10/24","24/11/24","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C701)",5,"28/10/24","24/11/24","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C701)",3,"25/11/24","05/01/25","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C702)",3,"28/10/24","24/11/24","7->9"],
	["Linux và phần mềm nguồn mở-1-24 (A19C702)",5,"28/10/24","24/11/24","7->9"],
	["Linux và phần mềm nguồn mở-1-24 (A19C702)",3,"25/11/24","05/01/25","7->9"],
	["Linux và phần mềm nguồn mở-1-24 (A19C703)",3,"28/10/24","24/11/24","4->6"],
	["Linux và phần mềm nguồn mở-1-24 (A19C703)",5,"28/10/24","24/11/24","4->6"],
	["Linux và phần mềm nguồn mở-1-24 (A19C703)",3,"25/11/24","05/01/25","4->6"],
	["Linux và phần mềm nguồn mở-1-24 (A19C704)",3,"28/10/24","24/11/24","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C704)",5,"28/10/24","24/11/24","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C704)",3,"25/11/24","05/01/25","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C705)",2,"28/10/24","17/11/24","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C705)",4,"28/10/24","17/11/24","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C705)",2,"18/11/24","24/11/24","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C705)",2,"25/11/24","01/12/24","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C705)",4,"25/11/24","01/12/24","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C705)",2,"02/12/24","05/01/25","1->3"],
	["Linux và phần mềm nguồn mở-1-24 (A19C706)",4,"28/10/24","17/11/24","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C706)",6,"28/10/24","17/11/24","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C706)",6,"18/11/24","24/11/24","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C706)",4,"25/11/24","01/12/24","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C706)",6,"25/11/24","01/12/24","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C706)",4,"02/12/24","29/12/24","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C706)",6,"30/12/24","05/01/25","10->12"],
	["Linux và phần mềm nguồn mở-1-24 (A19C707)",3,"28/10/24","24/11/24","4->6"],
	["Linux và phần mềm nguồn mở-1-24 (A19C707)",5,"28/10/24","24/11/24","4->6"],
	["Linux và phần mềm nguồn mở-1-24 (A19C707)",3,"25/11/24","05/01/25","4->6"],
	["Linux và phần mềm nguồn mở-1-24 (A19C708)",2,"28/10/24","17/11/24","7->9"],
	["Linux và phần mềm nguồn mở-1-24 (A19C708)",4,"28/10/24","17/11/24","7->9"],
	["Linux và phần mềm nguồn mở-1-24 (A19C708)",2,"18/11/24","24/11/24","7->9"],
	["Linux và phần mềm nguồn mở-1-24 (A19C708)",2,"25/11/24","01/12/24","7->9"],
	["Linux và phần mềm nguồn mở-1-24 (A19C708)",4,"25/11/24","01/12/24","7->9"],
	["Linux và phần mềm nguồn mở-1-24 (A19C708)",2,"02/12/24","05/01/25","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C701)",3,"12/08/24","08/09/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C701)",6,"12/08/24","08/09/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C701)",3,"09/09/24","15/09/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C701)",6,"09/09/24","15/09/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C701)",6,"16/09/24","13/10/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C702)",3,"12/08/24","08/09/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C702)",6,"12/08/24","08/09/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C702)",3,"09/09/24","15/09/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C702)",6,"09/09/24","15/09/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C702)",6,"16/09/24","13/10/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C703)",3,"12/08/24","08/09/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C703)",6,"12/08/24","08/09/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C703)",3,"09/09/24","15/09/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C703)",6,"09/09/24","15/09/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C703)",6,"16/09/24","13/10/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C704)",3,"12/08/24","08/09/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C704)",6,"12/08/24","08/09/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C704)",3,"09/09/24","15/09/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C704)",6,"09/09/24","15/09/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C704)",6,"16/09/24","13/10/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C705)",4,"12/08/24","08/09/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C705)",6,"12/08/24","08/09/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C705)",4,"09/09/24","15/09/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C705)",6,"09/09/24","15/09/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C705)",6,"16/09/24","13/10/24","1->3"],
	["Nguyên lý hệ điều hành-1-24 (A19C706)",4,"12/08/24","08/09/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C706)",6,"12/08/24","08/09/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C706)",4,"09/09/24","15/09/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C706)",6,"09/09/24","15/09/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C706)",6,"16/09/24","13/10/24","7->9"],
	["Nguyên lý hệ điều hành-1-24 (A19C707)",4,"12/08/24","08/09/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C707)",6,"12/08/24","08/09/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C707)",4,"09/09/24","15/09/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C707)",6,"09/09/24","15/09/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C707)",6,"16/09/24","13/10/24","4->6"],
	["Nguyên lý hệ điều hành-1-24 (A19C708)",4,"12/08/24","08/09/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C708)",6,"12/08/24","08/09/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C708)",4,"09/09/24","15/09/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C708)",6,"09/09/24","15/09/24","10->12"],
	["Nguyên lý hệ điều hành-1-24 (A19C708)",6,"16/09/24","13/10/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1901)",6,"28/10/24","10/11/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",4,"11/11/24","17/11/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",6,"11/11/24","17/11/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",6,"18/11/24","24/11/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",4,"25/11/24","22/12/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",6,"25/11/24","22/12/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",4,"23/12/24","29/12/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",5,"23/12/24","29/12/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",6,"23/12/24","29/12/24","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",5,"30/12/24","05/01/25","1->3"],
	["Nhập môn mật mã học-1-24 (A1901)",6,"30/12/24","05/01/25","1->3"],
	["Nhập môn mật mã học-1-24 (A1902)",6,"28/10/24","10/11/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",4,"11/11/24","17/11/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",6,"11/11/24","17/11/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",6,"18/11/24","24/11/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",4,"25/11/24","22/12/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",6,"25/11/24","22/12/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",4,"23/12/24","29/12/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",5,"23/12/24","29/12/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",6,"23/12/24","29/12/24","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",5,"30/12/24","05/01/25","7->9"],
	["Nhập môn mật mã học-1-24 (A1902)",6,"30/12/24","05/01/25","7->9"],
	["Nhập môn mật mã học-1-24 (A1903)",6,"28/10/24","10/11/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",4,"11/11/24","17/11/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",6,"11/11/24","17/11/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",6,"18/11/24","24/11/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",4,"25/11/24","22/12/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",6,"25/11/24","22/12/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",4,"23/12/24","29/12/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",5,"23/12/24","29/12/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",6,"23/12/24","29/12/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",5,"30/12/24","05/01/25","4->6"],
	["Nhập môn mật mã học-1-24 (A1903)",6,"30/12/24","05/01/25","4->6"],
	["Nhập môn mật mã học-1-24 (A1904)",6,"28/10/24","10/11/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",4,"11/11/24","17/11/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",6,"11/11/24","17/11/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",6,"18/11/24","24/11/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",4,"25/11/24","22/12/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",6,"25/11/24","22/12/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",4,"23/12/24","29/12/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",5,"23/12/24","29/12/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",6,"23/12/24","29/12/24","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",5,"30/12/24","05/01/25","10->12"],
	["Nhập môn mật mã học-1-24 (A1904)",6,"30/12/24","05/01/25","10->12"],
	["Nhập môn mật mã học-1-24 (A1905)",6,"28/10/24","10/11/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1905)",2,"11/11/24","22/12/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1905)",6,"11/11/24","22/12/24","4->6"],
	["Nhập môn mật mã học-1-24 (A1905)",2,"23/12/24","05/01/25","4->6"],
	["Nhập môn mật mã học-1-24 (A1905)",6,"23/12/24","05/01/25","4->6"],
	["Thiết kế mạch sử dụng máy tính-1-24 (D601)",3,"28/10/24","24/11/24","4->6"],
	["Thiết kế mạch sử dụng máy tính-1-24 (D601)",5,"28/10/24","24/11/24","4->6"],
	["Thiết kế mạch sử dụng máy tính-1-24 (D601)",3,"25/11/24","05/01/25","4->6"],
	["Thiết kế mạch sử dụng máy tính-1-24 (D602)",3,"28/10/24","24/11/24","10->12"],
	["Thiết kế mạch sử dụng máy tính-1-24 (D602)",5,"28/10/24","24/11/24","10->12"],
	["Thiết kế mạch sử dụng máy tính-1-24 (D602)",3,"25/11/24","05/01/25","10->12"],
	["Thông tin số-1-24 (D601)",3,"28/10/24","10/11/24","1->3"],
	["Thông tin số-1-24 (D601)",5,"28/10/24","10/11/24","1->3"],
	["Thông tin số-1-24 (D601)",5,"11/11/24","05/01/25","1->3"],
	["Thông tin số-1-24 (D602)",5,"28/10/24","10/11/24","7->9"],
	["Thông tin số-1-24 (D602)",6,"28/10/24","10/11/24","7->9"],
	["Thông tin số-1-24 (D602)",5,"11/11/24","05/01/25","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D601)",3,"12/08/24","01/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D601)",5,"12/08/24","01/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D601)",6,"12/08/24","01/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D601)",3,"02/09/24","08/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D601)",5,"02/09/24","08/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D601)",3,"09/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D601)",5,"09/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D601)",6,"09/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D602)",3,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D602)",5,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D602)",6,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D602)",3,"26/08/24","01/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D602)",5,"26/08/24","01/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D602)",3,"02/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D602)",5,"02/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D602)",6,"02/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D603)",3,"12/08/24","25/08/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D603)",5,"12/08/24","25/08/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D603)",6,"12/08/24","25/08/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D603)",3,"26/08/24","01/09/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D603)",5,"26/08/24","01/09/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D603)",3,"02/09/24","13/10/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D603)",5,"02/09/24","13/10/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D603)",6,"02/09/24","13/10/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D604)",3,"12/08/24","25/08/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D604)",5,"12/08/24","25/08/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D604)",6,"12/08/24","25/08/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D604)",3,"26/08/24","01/09/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D604)",5,"26/08/24","01/09/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D604)",3,"02/09/24","13/10/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D604)",5,"02/09/24","13/10/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D604)",6,"02/09/24","13/10/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D605)",2,"12/08/24","25/08/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",4,"12/08/24","25/08/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",6,"12/08/24","25/08/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",2,"26/08/24","01/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",4,"26/08/24","01/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",6,"26/08/24","01/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",4,"02/09/24","08/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",6,"02/09/24","08/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",2,"09/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",4,"09/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D605)",6,"09/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D606)",2,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",4,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",6,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",2,"26/08/24","01/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",4,"26/08/24","01/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",6,"26/08/24","01/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",4,"02/09/24","08/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",6,"02/09/24","08/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",2,"09/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",4,"09/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D606)",6,"09/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D607)",2,"12/08/24","25/08/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",4,"12/08/24","25/08/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",6,"12/08/24","25/08/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",2,"26/08/24","01/09/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",4,"26/08/24","01/09/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",6,"26/08/24","01/09/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",4,"02/09/24","08/09/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",6,"02/09/24","08/09/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",2,"09/09/24","13/10/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",4,"09/09/24","13/10/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D607)",6,"09/09/24","13/10/24","1->3"],
	["Tiếng Anh 3-1-24 (A19C7D608)",2,"12/08/24","25/08/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",4,"12/08/24","25/08/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",6,"12/08/24","25/08/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",2,"26/08/24","01/09/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",4,"26/08/24","01/09/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",6,"26/08/24","01/09/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",4,"02/09/24","08/09/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",6,"02/09/24","08/09/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",2,"09/09/24","13/10/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",4,"09/09/24","13/10/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D608)",6,"09/09/24","13/10/24","7->9"],
	["Tiếng Anh 3-1-24 (A19C7D609)",3,"12/08/24","25/08/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D609)",5,"12/08/24","25/08/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D609)",6,"12/08/24","25/08/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D609)",3,"26/08/24","01/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D609)",5,"26/08/24","01/09/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D609)",3,"02/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D609)",5,"02/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D609)",6,"02/09/24","13/10/24","4->6"],
	["Tiếng Anh 3-1-24 (A19C7D610)",3,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D610)",5,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D610)",6,"12/08/24","25/08/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D610)",3,"26/08/24","01/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D610)",5,"26/08/24","01/09/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D610)",3,"02/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D610)",5,"02/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D610)",6,"02/09/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D611)",3,"12/08/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D611)",4,"12/08/24","13/10/24","10->12"],
	["Tiếng Anh 3-1-24 (A19C7D611)",5,"12/08/24","13/10/24","10->12"],
	["Tín hiệu và hệ thống-1-24 (D601)",3,"12/08/24","15/09/24","1->3"],
	["Tín hiệu và hệ thống-1-24 (D601)",3,"16/09/24","06/10/24","1->3"],
	["Tín hiệu và hệ thống-1-24 (D601)",5,"16/09/24","06/10/24","1->3"],
	["Tín hiệu và hệ thống-1-24 (D601)",3,"07/10/24","13/10/24","1->3"],
	["Tín hiệu và hệ thống-1-24 (D602)",3,"12/08/24","15/09/24","7->9"],
	["Tín hiệu và hệ thống-1-24 (D602)",3,"16/09/24","06/10/24","7->9"],
	["Tín hiệu và hệ thống-1-24 (D602)",5,"16/09/24","06/10/24","7->9"],
	["Tín hiệu và hệ thống-1-24 (D602)",3,"07/10/24","13/10/24","7->9"]
	    
	]
                                      