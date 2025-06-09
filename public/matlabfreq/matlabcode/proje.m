function varargout = proje(varargin)
% proje MATLAB code for proje.fig
%      proje, by itself, creates a new proje or raises the existing
%      singleton*.
%
%      H = proje returns the handle to a new proje or the handle to
%      the existing singleton*.
%
%      proje('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in proje.M with the given input arguments.
%
%      proje('Property','Value',...) creates a new proje or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before proje_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to proje_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help proje

% Last Modified by GUIDE v2.5 03-Jun-2024 23:47:49

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @proje_OpeningFcn, ...
                   'gui_OutputFcn',  @proje_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before proje is made visible.
function proje_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to proje (see VARARGIN)

% Choose default command line output for proje
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes proje wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = proje_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;



function edit1_Callback(hObject, eventdata, handles)
% hObject    handle to edit1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit1 as text
%        str2double(get(hObject,'String')) returns contents of edit1 as a double


% --- Executes during object creation, after setting all properties.
function edit1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edit1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function edit2_Callback(hObject, eventdata, handles)
% hObject    handle to edit2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit2 as text
%        str2double(get(hObject,'String')) returns contents of edit2 as a double


% --- Executes during object creation, after setting all properties.
function edit2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edit2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function edit3_Callback(hObject, eventdata, handles)
% hObject    handle to edit3 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit3 as text
%        str2double(get(hObject,'String')) returns contents of edit3 as a double


% --- Executes during object creation, after setting all properties.
function edit3_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edit3 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on selection change in popupmenu1.
function popupmenu1_Callback(hObject, eventdata, handles)
% hObject    handle to popupmenu1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = cellstr(get(hObject,'String')) returns popupmenu1 contents as cell array
%        contents{get(hObject,'Value')} returns selected item from popupmenu1
frekans = str2num(get(handles.edit1,'string'));
genlik = str2num(get(handles.edit2,'string'));
faz_kaymasi = str2num(get(handles.edit3,'string'));

t = 0:0.01:1;
sinyal = [];
sinyal_turu = get(handles.popupmenu1,'Value');
switch sinyal_turu
    case 1 % Kare Dalga
        sinyal = square(2*pi*frekans*t + faz_kaymasi, genlik);
    case 2 % Üçgen Dalga
        sinyal = sawtooth(2*pi*frekans*t + faz_kaymasi, 0.5);
    case 3 % Rampa
        sinyal = sawtooth(2*pi*frekans*t + faz_kaymasi, 1);
    case 4 % Tam Dalga Doğrultulmuş Sinüs
        sinyal = genlik*abs(sin(2*pi*frekans*t + faz_kaymasi));
    case 5 % Tam Dalga Doğrultulmuş Kosinüs
        sinyal = genlik*abs(cos(2*pi*frekans*t + faz_kaymasi));
    case 6 % Yarım Dalga Doğrultulmuş Sinüs
        sinyal = genlik*abs(sin(2*pi*frekans*t + faz_kaymasi));
        sinyal(t > 0.5) = 0;
    case 7 % Yarım Dalga Doğrultulmuş Kosinüs
        sinyal = genlik*abs(cos(2*pi*frekans*t + faz_kaymasi));
        sinyal(t > 0.5) = 0;
end

L = length(sinyal); % Sinyal uzunluğu
NFFT = 2^nextpow2(L); % FFT'nin uzunluğu
Y = fft(sinyal, NFFT)/L; % FFT hesabı
f = frekans/2*linspace(0,1,NFFT/2+1); % Frekans vektörü

axes(handles.axes1); 
plot(t, sinyal);
xlabel('Zaman');
ylabel('Genlik');
title('Sinyal');

axes(handles.axes2); 
% Genlik spektrumu
plot(f, 2*abs(Y(1:NFFT/2+1)), 'b') % Mavi renkte genlik spektrumu
hold on; 
% Faz spektrumu
plot(f, angle(Y(1:NFFT/2+1)), 'r') % Kırmızı renkte faz spektrumu
hold off; 

title('Genlik ve Faz Spektrumu')
xlabel('Frekans (Hz)')
ylabel('Genlik / Faz (radyan)')
legend('Genlik', 'Faz') 




% --- Executes during object creation, after setting all properties.
function popupmenu1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to popupmenu1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: popupmenu controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end
