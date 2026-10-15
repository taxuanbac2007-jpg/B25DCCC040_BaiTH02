const { useState, useEffect } = React;

const Sun = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const Cloud = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const CloudSun = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M12 2v2m-7.1 2.9 1.4 1.4M2 12h2" />
    <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3.5 3.5 0 0 1 0 7Z" />
  </svg>
);

const CloudRain = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6M8 14v6M12 16v6" />
  </svg>
);

const CloudLightning = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973M13 12l-3 5h4l-3 5" />
  </svg>
);

const CloudDrizzle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 19v1M8 14v1M12 21v1M12 16v1M16 19v1M16 14v1" />
  </svg>
);

const CloudFog = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M4 15h16M4 9h16M4 12h16M4 18h16" />
  </svg>
);

const Wind = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>
  </svg>
);

const Droplets = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.42 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.37-2.35 1-3.5"/>
  </svg>
);

const RefreshCw = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>
  </svg>
);

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const DANH_SACH_THANH_PHO = [
  { id: 'hanoi', ten: 'Hà Nội', viDo: 21.0285, kinhDo: 105.8542 },
  { id: 'haiphong', ten: 'Hải Phòng', viDo: 20.8449, kinhDo: 106.6881 },
  { id: 'hue', ten: 'Huế', viDo: 16.4637, kinhDo: 107.5909 },
  { id: 'danang', ten: 'Đà Nẵng', viDo: 16.0544, kinhDo: 108.2022 },
  { id: 'nhatrang', ten: 'Nha Trang', viDo: 12.2388, kinhDo: 109.1967 },
  { id: 'dalat', ten: 'Đà Lạt', viDo: 11.9404, kinhDo: 108.4583 },
  { id: 'tphcm', ten: 'TP. Hồ Chí Minh', viDo: 10.8231, kinhDo: 106.6297 },
  { id: 'cantho', ten: 'Cần Thơ', viDo: 10.0452, kinhDo: 105.7469 }
];

const giaiMaMaThoiTiet = (maThoiTiet) => {
  switch (maThoiTiet) {
    case 0:
      return {
        moTa: 'Trời quang đãng',
        bieuTuong: <Sun className="w-10 h-10 text-amber-500" />
      };
    case 1:
    case 2:
      return {
        moTa: 'Ít mây, nắng nhẹ',
        bieuTuong: <CloudSun className="w-10 h-10 text-sky-500" />
      };
    case 3:
      return {
        moTa: 'Nhiều mây, âm u',
        bieuTuong: <Cloud className="w-10 h-10 text-slate-500" />
      };
    case 45:
    case 48:
      return {
        moTa: 'Có sương mù',
        bieuTuong: <CloudFog className="w-10 h-10 text-teal-500" />
      };
    case 51:
    case 53:
    case 55:
      return {
        moTa: 'Mưa phun rải rác',
        bieuTuong: <CloudDrizzle className="w-10 h-10 text-blue-400" />
      };
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return {
        moTa: 'Mưa rào nặng hạt',
        bieuTuong: <CloudRain className="w-10 h-10 text-blue-600" />
      };
    case 95:
    case 96:
    case 99:
      return {
        moTa: 'Có dông & sấm sét',
        bieuTuong: <CloudLightning className="w-10 h-10 text-purple-600" />
      };
    default:
      return {
        moTa: 'Thời tiết ôn hòa',
        bieuTuong: <CloudSun className="w-10 h-10 text-sky-500" />
      };
  }
};

const dinhDangThoiGian = (chuoiThoiGian) => {
  if (!chuoiThoiGian) return '';
  const ngay = new Date(chuoiThoiGian);
  const gio = String(ngay.getHours()).padStart(2, '0');
  const phut = String(ngay.getMinutes()).padStart(2, '0');
  const ngayThang = String(ngay.getDate()).padStart(2, '0');
  const thang = String(ngay.getMonth() + 1).padStart(2, '0');
  const nam = ngay.getFullYear();
  return `${gio}:${phut} - ${ngayThang}/${thang}/${nam}`;
};

const layThuTrongTuan = (chuoiNgay) => {
  if (!chuoiNgay) return '';
  const ngay = new Date(chuoiNgay);
  const cacThu = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  return cacThu[ngay.getDay()];
};

function App() {
  const [thanhPhoDangChon, setThanhPhoDangChon] = useState(null);
  const [duLieuThoiTiet, setDuLieuThoiTiet] = useState(null);
  const [dangTai, setDangTai] = useState(false);
  const [coLoi, setCoLoi] = useState(false);
  const [donViNhietDo, setDonViNhietDo] = useState('C');

  const layDuLieuThoiTiet = async (thanhPho) => {
    if (!thanhPho) return;

    setDangTai(true);
    setCoLoi(false);

    const duongDanApi = `https://api.open-meteo.com/v1/forecast?latitude=${thanhPho.viDo}&longitude=${thanhPho.kinhDo}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FHo_Chi_Minh&forecast_days=7`;

    try {
      const phanHoi = await fetch(duongDanApi);
      if (!phanHoi.ok) {
        throw new Error('Lỗi kết nối API');
      }
      const duLieu = await phanHoi.json();
      setDuLieuThoiTiet(duLieu);
    } catch (loi) {
      console.error('Không thể tải dữ liệu thời tiết:', loi);
      setCoLoi(true);
    } finally {
      setDangTai(false);
    }
  };

  useEffect(() => {
    if (thanhPhoDangChon) {
      layDuLieuThoiTiet(thanhPhoDangChon);
    }
  }, [thanhPhoDangChon]);

  const tinhNhietDo = (nhietDoDoC) => {
    if (nhietDoDoC === undefined || nhietDoDoC === null) return 0;
    if (donViNhietDo === 'F') {
      return Math.round(nhietDoDoC * 1.8 + 32);
    }
    return Math.round(nhietDoDoC);
  };

  const thongTinThoiTietHienTai = duLieuThoiTiet?.current?.weather_code !== undefined
    ? giaiMaMaThoiTiet(duLieuThoiTiet.current.weather_code)
    : null;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-5">
      
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 sm:p-5 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-50 rounded-lg text-indigo-600">
            <CloudSun className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
              Ứng Dụng Xem Thời Tiết
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-md border border-slate-200">
          <span className="text-xs text-slate-500 font-medium px-2">Đơn vị:</span>
          <button
            onClick={() => setDonViNhietDo('C')}
            className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
              donViNhietDo === 'C'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            °C
          </button>
          <button
            onClick={() => setDonViNhietDo('F')}
            className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
              donViNhietDo === 'F'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            °F
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        <div className="md:col-span-4 bg-white rounded-lg border border-slate-200 p-4 shadow-sm space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
            Danh sách thành phố
          </h2>

          <div className="space-y-1.5">
            {DANH_SACH_THANH_PHO.map((thanhPho) => {
              const laThanhPhoDangChon = thanhPhoDangChon?.id === thanhPho.id;

              return (
                <button
                  key={thanhPho.id}
                  onClick={() => setThanhPhoDangChon(thanhPho)}
                  className={`w-full flex items-center justify-between p-3 rounded-md border text-left text-sm font-medium transition-all ${
                    laThanhPhoDangChon
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-semibold'
                      : 'bg-white border-slate-100 text-slate-700 hover:bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className={`w-4 h-4 ${laThanhPhoDangChon ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span>{thanhPho.ten}</span>
                  </div>
                  {laThanhPhoDangChon && (
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-8 space-y-5">
          
          {!thanhPhoDangChon && (
            <div className="bg-white rounded-lg p-12 text-center border border-slate-200 shadow-sm">
              <MapPin className="w-10 h-10 mx-auto mb-2 text-slate-300" />
              <h3 className="text-base font-bold text-slate-700">Chưa chọn thành phố nào</h3>
              <p className="text-slate-500 text-xs mt-1">Vui lòng nhấp vào một thành phố ở danh sách bên trái để xem thời tiết.</p>
            </div>
          )}

          {thanhPhoDangChon && dangTai && (
            <div className="bg-white rounded-lg p-12 text-center border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-3">
              <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
              <p className="text-sm font-medium text-slate-600">Đang tải dữ liệu thời tiết cho {thanhPhoDangChon.ten}...</p>
            </div>
          )}

          {thanhPhoDangChon && !dangTai && coLoi && (
            <div className="bg-rose-50 rounded-lg p-6 text-center border border-rose-200 text-rose-800 space-y-3">
              <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
              <h3 className="text-base font-bold">Lỗi kết nối dữ liệu</h3>
              <p className="text-xs text-rose-600">
                Không thể lấy dữ liệu từ máy chủ API. Vui lòng kiểm tra lại đường truyền mạng.
              </p>
              <button
                onClick={() => layDuLieuThoiTiet(thanhPhoDangChon)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition-all text-xs shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Thử lại
              </button>
            </div>
          )}

          {thanhPhoDangChon && !dangTai && !coLoi && duLieuThoiTiet && (
            <>
              <div className="bg-white rounded-lg p-5 sm:p-6 border border-slate-200 shadow-sm space-y-5">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{thanhPhoDangChon.ten}</h2>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200 self-start sm:self-auto">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Cập nhật: {dinhDangThoiGian(duLieuThoiTiet.current.time)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      {thongTinThoiTietHienTai?.bieuTuong}
                    </div>
                    <div>
                      <div className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        {tinhNhietDo(duLieuThoiTiet.current.temperature_2m)}°{donViNhietDo}
                      </div>
                      <p className="text-sm font-medium text-slate-600 mt-0.5">
                        {thongTinThoiTietHienTai?.moTa}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                      <Droplets className="w-4 h-4 text-sky-500 mb-1" />
                      <span className="text-[11px] text-slate-400 font-medium uppercase">Độ ẩm</span>
                      <span className="text-base font-bold text-slate-700">{duLieuThoiTiet.current.relative_humidity_2m}%</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                      <Wind className="w-4 h-4 text-indigo-500 mb-1" />
                      <span className="text-[11px] text-slate-400 font-medium uppercase">Tốc độ gió</span>
                      <span className="text-base font-bold text-slate-700">{duLieuThoiTiet.current.wind_speed_10m} km/h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-800">Dự báo 7 ngày tới</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
                  {duLieuThoiTiet.daily.time.map((ngayIso, chiSo) => {
                    const maThoiTietNgay = duLieuThoiTiet.daily.weather_code[chiSo];
                    const thongTinNgay = giaiMaMaThoiTiet(maThoiTietNgay);
                    const nhietDoCaoNhat = tinhNhietDo(duLieuThoiTiet.daily.temperature_2m_max[chiSo]);
                    const nhietDoThapNhat = tinhNhietDo(duLieuThoiTiet.daily.temperature_2m_min[chiSo]);
                    const laHomNay = chiSo === 0;

                    return (
                      <div
                        key={ngayIso}
                        className={`flex lg:flex-col items-center justify-between lg:justify-center p-2.5 rounded border ${
                          laHomNay
                            ? 'bg-indigo-50/60 border-indigo-200 text-indigo-900 font-medium'
                            : 'bg-slate-50 border-slate-100 text-slate-700'
                        }`}
                      >
                        <div className="text-left lg:text-center">
                          <p className="text-xs font-bold">
                            {laHomNay ? 'Hôm nay' : layThuTrongTuan(ngayIso)}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {new Date(ngayIso).getDate()}/{new Date(ngayIso).getMonth() + 1}
                          </p>
                        </div>

                        <div className="my-1 transform scale-75">
                          {thongTinNgay.bieuTuong}
                        </div>

                        <div className="text-right lg:text-center">
                          <span className="text-xs font-bold text-slate-800">
                            {nhietDoCaoNhat}°
                          </span>
                          <span className="text-[10px] text-slate-400 ml-1 lg:ml-0 lg:block">
                            {nhietDoThapNhat}°
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);